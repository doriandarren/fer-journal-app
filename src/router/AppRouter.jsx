import { Route, Routes } from "react-router";
import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";
import { JournalRoutes } from "../modules/journal/routes/JournalRoutes";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../ui/";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { logout } from "../store/auth";

export const AppRouter = () => {

  const { status } = useSelector( state => state.auth );

  const dispatch = useDispatch();


  useEffect(() => {

    onAuthStateChanged(FirebaseAuth, async(user) => {
      console.log(user);

      if( !user ) return dispatch( logout() );
    })
    
  }, [])
  


  if(status === 'checking'){
    return <CheckingAuth />
  }

    return (
      <Routes>

        {/* Login y registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />


        {/* JournalApp */}
        <Route path="/*" element={ <JournalRoutes /> } />

      </Routes>
    )
}
