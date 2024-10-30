'use client'

import { getCards, getComments, getUser } from '@/api/api';
import { TPost, TUser } from '@/types/types';
import {createContext, useEffect, useState} from 'react';
import { useContextValue } from './context-provider';


export const FeedPageContext = createContext<any>(undefined);


const FeedPageProvider = ({children}) => {

    
    const [posts, setPosts] = useState<TPost[]>([]);
    
    const [isImageCliked, setIsImageCliked] = useState<boolean>(false);

    const [imageUrl, setImageUrl] = useState<string>('');

    const {setIsLoading} = useContextValue();

    useEffect(() => {
        async function fetchCards() {
          try {
            setIsLoading(true);
            const cards = await getCards();
            setPosts(cards);
            setIsLoading(false)
          } catch(error) {
            console.log(error)
            setIsLoading(false)
          }
        }
        fetchCards();
    }, []);

    return <FeedPageContext.Provider value={{
      posts, setPosts,
      isImageCliked, setIsImageCliked,
      imageUrl, setImageUrl,
    }}>{children}</FeedPageContext.Provider>

}

export default FeedPageProvider