import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

//Ce hook utilise useContext pour accéder aux valeurs fournies par le contexte AuthContext. Il permettra aux composants de consommer facilement les valeurs de ce contexte sans avoir à écrire useContext(AuthContext) à chaque fois.
export const useAuthContext = () =>{
    return useContext(AuthContext);
};



export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null )

    return <AuthContext.Provider value={{authUser, setAuthUser}}>
        {children}
        </AuthContext.Provider>;
};

// Le hook useAuthContext facilite la consommation de ce contexte dans les composants enfants. Le composant AuthContextProvider fournit les valeurs d'état d'authentification et les rendent accessibles à toute l'arborescence des composants descendante à partir de ce composant.

