import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) => {
  return async(dispatch) => {

    dispatch( checkingCredentials() );

  }
}


export const startGoogleSignIn = () => {
    return async(dispatch) => {

        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
        //console.log({result});

        if(!result) return dispatch( logout(result.errorMessage) );

        
        dispatch( login( result ) )

    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displaName }) => {

  return async( dispatch ) => {
    dispatch( checkingCredentials() );

    const resp = await registerUserWithEmailPassword({email, password, displaName });

    console.log(resp);
  }
}