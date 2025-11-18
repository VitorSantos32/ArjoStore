import { firebaseAuthService } from './firebaseAuth';

export interface User {
  id: string;
  email: string;
  name?: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// Serviço de autenticação que usa Firebase
export const authService = {
  // Registrar com Firebase
  async register(name: string, email: string, password: string): Promise<AuthResponse> {
    return await firebaseAuthService.register(email, password, name);
  },

  // Login com Firebase
  async login(email: string, password: string): Promise<AuthResponse> {
    return await firebaseAuthService.login(email, password);
  },

  // Login com Google (Firebase)
  async googleLogin(): Promise<AuthResponse> {
    return await firebaseAuthService.loginWithGoogle();
  },



  // Logout
  async logout(): Promise<void> {
    await firebaseAuthService.logout();
  },

  // Obter usuário atual
  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Verificar se está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token') && !!firebaseAuthService.getCurrentFirebaseUser();
  },

  // Observar mudanças no estado de autenticação
  onAuthStateChanged(callback: (user: any) => void) {
    return firebaseAuthService.onAuthStateChanged(callback);
  },
};
