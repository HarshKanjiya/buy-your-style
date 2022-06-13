import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser :null,
    setCurrentUser :() => null,
});

export const UserProvider = ( { children }) => {

    const [currentUser , setCurrentUser ] = useState(null);
    const value = { currentUser , setCurrentUser};

    useEffect(()=>{
        const unsubscibe = onAuthStateChangedListner((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscibe
    }
    ,[])

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
        )

}