import React, { createContext, useContext, useEffect, useState } from "react";
import { authService, firebaseInstance } from "./myFirebase";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children, setInit }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
      setInit(true);
    });
  }, []);

  const socialLogin = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    const data = authService.signInWithPopup(provider);

    console.log(data);
  };

  const logUserIn = async (email, password) => {
    try {
      authService
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };

  const logUserOut = async () => {
    try {
      authService.signOut();
      setIsLoggedIn(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        logUserIn,
        logUserOut,
        socialLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useIsLoggedIn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};

export const useLogIn = () => {
  const { logUserIn } = useContext(AuthContext);
  return logUserIn;
};

export const useLogOut = () => {
  const { logUserOut } = useContext(AuthContext);
  return logUserOut;
};

export const useUser = () => {
  const { user } = useContext(AuthContext);
  return user;
};

export const useSocialLogin = () => {
  const { socialLogin } = useContext(AuthContext);
  return socialLogin;
};
