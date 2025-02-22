import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try{

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        //console.log({ credentials });

        const { displayName, email, photoURL, uid } = result.user;

        //console.log({ user });

        return {
            ok: true,
            //User info
            displayName, 
            email, 
            photoURL, 
            uid 
        }

    }catch(error){
        console.log(error);

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        return {
            ok: false,
            errorMessage,
        }

    }

}



export const registerUserWithEmailPassword = async({ email, password, displayName}) => {

    try {
        
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photURL } = resp.user;
        

        //TODO actualizar el displayname en Firebase

        await updateProfile(FirebaseAuth.currentUser, { displayName });


        return {
            ok: true,
            uid, photURL, email, displayName
        }

    } catch (error) {
        //console.log(error);
        return { 
            ok: false,
            errorMessage: error.message 
        }
    }
}



export const loginWithEmailPassword = async({ email, password}) => {

    //! signInWithEmailAndPassword

    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photURL, displayName } = resp.user;


        return {
            ok: true,
            uid, photURL, email, displayName
        }
        
    } catch (error) {
        return { 
            ok: false,
            errorMessage: error.message 
        }
    }


}