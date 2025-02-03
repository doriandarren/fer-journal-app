import { AppTheme } from "./modules/theme"
import { AppRouter } from "./router/AppRouter"

export const JournalApp = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    )
}
