import { Route, Routes } from "react-router";
import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";
import { JournalRoutes } from "../modules/journal/routes/JournalRoutes";

export const AppRouter = () => {
    return (
      <Routes>

        {/* Login y registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />


        {/* JournalApp */}
        <Route path="/*" element={ <JournalRoutes /> } />

      </Routes>
    )
}
