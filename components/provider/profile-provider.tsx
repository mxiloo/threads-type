'use client'

import { getUser } from "@/api/api";
import { TUser } from "@/types/types";
import {createContext, useCallback, useContext, useEffect, useRef, useState} from "react";
import { useContextValue } from "./context-provider";


export const ProfileContext = createContext<any>(undefined);


const ProfleProvider = ({children}) => {

    const [user, setUser] = useState<TUser>();
    const [isClickedChange, setIsClickedChange] = useState<boolean>(false);
    const {setIsLoading} = useContextValue();
    // console.log(user)

    const fetchUser = useCallback(async () => {
      try {
        setIsLoading(true);
        const userData = await getUser();
        setUser(userData);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    }, [])

    useEffect(() => {fetchUser()}, [fetchUser]);
    
    return <ProfileContext.Provider value={{
        user, setUser, 
        isClickedChange, setIsClickedChange, 
    }}>{children}</ProfileContext.Provider>
}

export default ProfleProvider