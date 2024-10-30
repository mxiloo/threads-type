'use client'

import {createContext, useRef, useState} from "react";


export const PostContext = createContext<any>(undefined);

const PostProvider = ({children}) => {

    // const [likeStyle, setLikeStyle] = useState<boolean>(false);
    // const [likeLength, setLikeLength] = useState<number>();
    // const [imageLoaded, setImageLoaded] = useState(false);
    // const [isVisible, setIsVisible] = useState(true);


    return <PostContext.Provider value={{}}>{children}</PostContext.Provider>
}

export default PostProvider