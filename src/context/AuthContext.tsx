import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, authService } from '../services/auth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let retryCount = 0;
    const MAX_RETRIES = 3;

    // Verificar se Firebase está configurado antes de observar mudanças
    try {
      // Observar mudanças no estado de autenticação do Firebase
      const unsubscribe = authService.onAuthStateChanged(async (firebaseUser) => {
        if (!isMounted) return;

        if (firebaseUser) {
          // Usuário está autenticado no Firebase
          // Buscar dados do usuário no backend
          try {
            const { user: backendUser } = await authService.getMe();
            if (isMounted) {
              setUser(backendUser);
              setLoading(false);
            }
          } catch (error: any) {
            // Se não conseguir buscar do backend
            if (error.response?.status === 401) {
              // Token inválido, limpar e usar dados do localStorage
              const currentUser = authService.getCurrentUser();
              if (isMounted) {
                setUser(currentUser);
                setLoading(false);
              }
            } else if (retryCount < MAX_RETRIES) {
              // Tentar novamente apenas algumas vezes
              retryCount++;
              setTimeout(() => {
                if (isMounted) {
                  const currentUser = authService.getCurrentUser();
                  setUser(currentUser);
                  setLoading(false);
                }
              }, 1000);
            } else {
              // Máximo de tentativas atingido
              if (isMounted) {
                const currentUser = authService.getCurrentUser();
                setUser(currentUser);
                setLoading(false);
              }
            }
          }
        } else {
          // Usuário não está autenticado
          if (isMounted) {
            setUser(null);
            setLoading(false);
          }
        }
      });

      return () => {
        isMounted = false;
        unsubscribe();
      };
    } catch (error) {
      // Se Firebase não estiver configurado, apenas verificar localStorage
      console.warn('Firebase não configurado, usando apenas localStorage');
      if (isMounted) {
        const currentUser = authService.getCurrentUser();
        setUser(currentUser);
        setLoading(false);
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await authService.login(email, password);
    setUser(response.user);
  };

  const register = async (name: string, email: string, password: string) => {
    const response = await authService.register(name, email, password);
    setUser(response.user);
  };

  const loginWithGoogle = async () => {
    const response = await authService.googleLogin();
    setUser(response.user);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        loginWithGoogle,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

