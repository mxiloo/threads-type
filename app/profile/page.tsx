'use client'

import { useContext } from 'react';
import { ProfileContext } from '@/components/provider/profile-provider';
import { FeedPageContext } from '@/components/provider/feed-page-provider';
import Posts from '@/components/posts/posts';
import Modal from '@/components/modal/modal';


function Profile() {

    const {user} = useContext(ProfileContext);
    const {posts, isImageCliked} = useContext(FeedPageContext);

    const userPosts = posts.filter((element) => {
        if (element?.owner?.name === user?.name) {
            return element
         } else {
            return null
        };
    });

    return(
        <>
            <Posts posts={userPosts} />
            {isImageCliked ? <Modal /> : null}
        </>   
    )
}

export default Profile