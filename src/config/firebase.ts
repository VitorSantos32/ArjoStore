import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

// Configuração do Firebase
// Substitua pelos valores do seu projeto Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Validar configuração
const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
];

const missingVars = requiredEnvVars.filter(
  (varName) => !import.meta.env[varName]
);

if (missingVars.length > 0) {
  console.error('❌ Firebase: Variáveis de ambiente faltando:', missingVars);
  console.error('Por favor, configure o arquivo .env com as credenciais do Firebase');
}

// Inicializar Firebase apenas se todas as variáveis estiverem configuradas
let app: FirebaseApp | null = null;
let auth: Auth | null = null;

try {
  if (missingVars.length === 0) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    console.log('✅ Firebase inicializado com sucesso');
  } else {
    console.warn('⚠️ Firebase não inicializado: variáveis de ambiente faltando');
    // Criar objetos mock para evitar erros
    auth = null as any;
  }
} catch (error) {
  console.error('❌ Erro ao inicializar Firebase:', error);
  auth = null as any;
}

export { auth };
export default app;

