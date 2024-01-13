import { AppContext } from "./AppContext.js"

export default function AppProvider({ children }) {

    const number = 10;

    return <AppContext.Provider value={{ number }}>
        {children}
    </AppContext.Provider>

}