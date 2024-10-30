'use client'

import { getUser } from '@/api/api';
import { TUser } from '@/types/types';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const Context = createContext<any>(undefined)

export const ContextProvider = ({ children }) => {

    
    const [isRefreshed, setIsRefreshed] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [refreshValue, setRefreshValue] = useState<string>('');
 
    return (
      <Context.Provider value={{ isRefreshed, setIsRefreshed, refreshValue, setRefreshValue, setIsLoading, isLoading}}>
        {children}
      </Context.Provider>
    )
}

export const useContextValue = () => useContext(Context);