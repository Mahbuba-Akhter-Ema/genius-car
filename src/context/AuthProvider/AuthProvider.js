import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithCredential, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithCredential(auth, email, password);
  }

  const logOut = () =>{
    setLoading(true)
    return signOut(auth);
}


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        // console.log(currentUser);
        setUser(currentUser)
        setLoading(false);
    });
    return () => {
        return unsubscribe();
    }
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
