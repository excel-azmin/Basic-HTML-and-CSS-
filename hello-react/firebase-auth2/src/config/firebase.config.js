import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAPPyN2a7kvkPYMD9CKaL06ulo_W7TM2v0',
  authDomain: 'react-auth2-f9cdb.firebaseapp.com',
  projectId: 'react-auth2-f9cdb',
  storageBucket: 'react-auth2-f9cdb.firebasestorage.app',
  messagingSenderId: '644363501221',
  appId: '1:644363501221:web:f15102ffa60ab8aedb174c',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
