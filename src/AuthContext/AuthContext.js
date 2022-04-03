import React from "react";
import { useReducer } from "react";
import { useContext } from "react";

const authContext = React.createContext();

export function useAuth() {
  return useContext(authContext);
}
const initialState = {
  videoState: [],
  user:null
};
const reducerFun = (state, action) => {
  if (action.type === "VIDEO") {
    return {
      videoState: action.payload,
    };
  }
  if(action.type === 'SIGNIN'){
    return {
      ...state,
      user:action.payload,
      videoState:state.videoState
    }
  }

  return initialState;
};

const AuthContext = ({ children }) => {
  const [state, dispatchFun] = useReducer(reducerFun, initialState);

  const videoStateHandler = (videosArr) => {
    dispatchFun({ type: "VIDEO", payload: videosArr });
  };

  const signinHandler=(user)=>{
    dispatchFun({type:'SIGNIN',payload:user})
  }

  const value = {
    videoState: state.videoState,
    videoStateHandler,
    signinHandler,
    user:state.user
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
export default AuthContext;
