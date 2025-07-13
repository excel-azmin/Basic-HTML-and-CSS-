import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = {
    user: 'Pankha Azmin',
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
