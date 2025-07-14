import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { AUTH, AUTH_PROVIDER } from '../config/firebase.init';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(AUTH, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(AUTH, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(AUTH, AUTH_PROVIDER);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(AUTH);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(AUTH, (currentUser) => {
      console.log('Auth state changed:', currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>
        {/* Children components will be rendered here */}
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
