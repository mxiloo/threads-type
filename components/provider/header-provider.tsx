'use client'

import {createContext, useRef, useState} from "react";


export const HeaderContext = createContext<any>(undefined);




const HeaderProvider = ({children}) => {

    const [headerClass, setHeaderClass] = useState();

    const myRef = useRef<HTMLElement | null>(null);
    

    return <HeaderContext.Provider value={{headerClass, setHeaderClass, myRef}}>{children}</HeaderContext.Provider>
}

export default HeaderProvider