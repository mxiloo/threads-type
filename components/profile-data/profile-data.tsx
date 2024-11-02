'use client'

import { useContext } from 'react';
import Posts from '../posts/posts';
import ProfileAbout from '../profile-about/profile-about';
import { ProfileContext } from '../provider/profile-provider';
import { FeedPageContext } from '../provider/feed-page-provider';


function ProfileData() {

    const {user} = useContext(ProfileContext);
    const {posts} = useContext(FeedPageContext);

    const userPosts = posts.filter((element) => {
        if (element?.owner?.name === user?.name) {
            return element
         } else {
            return null
        };
    });

    return (
        <>
            <ProfileAbout />
            <Posts posts={userPosts} />
        </>
    )
}

export default ProfileData