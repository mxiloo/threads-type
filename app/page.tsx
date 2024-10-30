'use client'

import Main from "@/components/main/main";
import { useContextValue } from "@/components/provider/context-provider";
import { useEffect } from "react";

export default function Home() {

  const {setRefreshValue} = useContextValue();

  useEffect(() => {
    setRefreshValue('Главная')
  }, [])

  return (
      <>
        <div>
          <Main />
        </div>    
      </>
      
  );
}
