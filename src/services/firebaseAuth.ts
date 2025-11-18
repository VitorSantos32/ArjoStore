import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from 'firebase/firestore';
import { auth, db } from '../config/firebase';

// Verificar se Firebase está configurado
if (!auth) {
  console.error('❌ Firebase não está configurado. Verifique as variáveis de ambiente no arquivo .env');
}

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

// Criar ou atualizar usuário no Firestore após autenticação Firebase
const syncUserWithFirestore = async (firebaseUser: FirebaseUser): Promise<AuthResponse> => {
  try {
    if (!db) {
      throw new Error('Firestore não está configurado');
    }

    // Obter token do Firebase (forçar refresh para garantir token válido)
    const firebaseToken = await firebaseUser.getIdToken(true);

    console.log('Salvando usuário no Firestore...', {
      email: firebaseUser.email,
      uid: firebaseUser.uid
    });

    const userDocRef = doc(db, 'users', firebaseUser.uid);
    const userDoc = await getDoc(userDocRef);

    const userData = {
      id: firebaseUser.uid,
      email: firebaseUser.email!,
      name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Usuário',
      role: 'user',
      createdAt: userDoc.exists() ? userDoc.data().createdAt : serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    // Salvar no Firestore
    await setDoc(userDocRef, userData, { merge: true });

    // Salvar dados locais
    localStorage.setItem('token', firebaseToken); // Usar firebaseToken como token
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('firebaseToken', firebaseToken);

    return {
      token: firebaseToken,
      user: userData
    };
  } catch (error: any) {
    console.error('Erro ao salvar usuário no Firestore:', error);
    throw new Error(error.message || 'Erro ao autenticar');
  }
};

export const firebaseAuthService = {
  // Registrar com email e senha
  async register(email: string, password: string, name?: string): Promise<AuthResponse> {
    if (!auth) {
      throw new Error('Firebase não está configurado. Verifique as variáveis de ambiente.');
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Atualizar displayName se fornecido
      if (name && userCredential.user) {
        // Nota: Para atualizar displayName, você precisaria usar updateProfile
        // Por enquanto, vamos passar o nome no syncUserWithFirestore
      }

      return await syncUserWithFirestore(userCredential.user);
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  },

  // Login com email e senha
  async login(email: string, password: string): Promise<AuthResponse> {
    if (!auth) {
      throw new Error('Firebase não está configurado. Verifique as variáveis de ambiente.');
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return await syncUserWithFirestore(userCredential.user);
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  },

  // Login com Google
  async loginWithGoogle(): Promise<AuthResponse> {
    if (!auth) {
      throw new Error('Firebase não está configurado. Verifique as variáveis de ambiente.');
    }
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return await syncUserWithFirestore(userCredential.user);
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  },

  // Logout
  async logout(): Promise<void> {
    if (!auth) {
      // Se Firebase não estiver configurado, apenas limpar localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('firebaseToken');
      return;
    }
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('firebaseToken');
    } catch (error: any) {
      throw new Error('Erro ao fazer logout');
    }
  },

  // Observar mudanças no estado de autenticação
  onAuthStateChanged(callback: (user: FirebaseUser | null) => void) {
    if (!auth) {
      // Se Firebase não estiver configurado, retornar callback imediatamente com null
      callback(null);
      return () => {}; // Retornar função vazia para unsubscribe
    }
    return onAuthStateChanged(auth, callback);
  },

  // Obter usuário atual do Firebase
  getCurrentFirebaseUser(): FirebaseUser | null {
    return auth ? auth.currentUser : null;
  },

  // Obter token do Firebase
  async getFirebaseToken(): Promise<string | null> {
    if (!auth) return null;
    const user = auth.currentUser;
    if (user) {
      return await user.getIdToken();
    }
    return null;
  },

  // Mensagens de erro amigáveis
  getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Este email já está em uso';
      case 'auth/invalid-email':
        return 'Email inválido';
      case 'auth/operation-not-allowed':
        return 'Operação não permitida';
      case 'auth/weak-password':
        return 'Senha muito fraca. Use pelo menos 6 caracteres';
      case 'auth/user-disabled':
        return 'Usuário desabilitado';
      case 'auth/user-not-found':
        return 'Usuário não encontrado';
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/too-many-requests':
        return 'Muitas tentativas. Tente novamente mais tarde';
      case 'auth/network-request-failed':
        return 'Erro de conexão. Verifique sua internet';
      default:
        return 'Erro ao autenticar. Tente novamente';
    }
  },
};
