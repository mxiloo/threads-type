'use client'

import styles from './profile.module.scss';
import { useContext } from 'react';
import { ProfileContext } from '@/components/provider/profile-provider';
import { FeedPageContext } from '@/components/provider/feed-page-provider';
import Posts from '@/components/posts/posts';
import ProfileAbout from '@/components/profile-about/profile-about';


function Profile() {

    const {user} = useContext(ProfileContext);
    const {posts} = useContext(FeedPageContext);

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
        </>   
    )
}

export default Profile