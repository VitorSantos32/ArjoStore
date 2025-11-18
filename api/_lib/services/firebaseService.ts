import admin from 'firebase-admin';

let firebaseInitialized = false;

const getCredentials = () => {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    return null;
  }

  return { projectId, clientEmail, privateKey };
};

const init = () => {
  if (firebaseInitialized) return;
  const credentials = getCredentials();
  if (!credentials) return;

  admin.initializeApp({
    credential: admin.credential.cert(credentials),
  });

  firebaseInitialized = true;
};

export const firebaseService = {
  isConfigured(): boolean {
    return Boolean(getCredentials());
  },

  async verifyToken(idToken: string) {
    init();

    if (this.isConfigured() && firebaseInitialized) {
      return admin.auth().verifyIdToken(idToken);
    }

    console.warn('Firebase não configurado. Token sendo aceito apenas para desenvolvimento.');
    return {
      uid: `dev-${idToken}`,
      email: undefined,
      name: undefined,
    };
  },
};

