import React, { useEffect, useReducer, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { dataReducer, initalState } from "../state/DataState/DataReducer";
import { actionType } from "../state/DataState/actionTypes";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initalState)

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const createUser = (email, password) => {
    console.log(email, password)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (userInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userInfo);
  };
  const logOut = () => {
    setLoading(true);

    return signOut(auth);
  };


  useEffect(() => {

    const unaubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unaubscribe();
  }, []);

  const item = JSON.parse(localStorage.getItem("email"));
  console.log(item);
  useEffect(() => {
    dispatch({ type: actionType.FATCHING_START })

    fetch(
      `http://localhost:5000/api/v1/get-single-user/${item?.email}`

    )
      .then((response) => response.json())
      .then(data => dispatch({ type: actionType.FATCHING_SUCCESS, payload: data.data }))
      .catch(() => {
        dispatch({ type: actionType.FATCHING_ERROR })
      })
  }, [])

  console.log(state);




  // }
  // console.log('ffff',GetUserByGroup())



  const authInfo = { createUser, login, updateUser, logOut, user, loading, state, dispatch };


  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
