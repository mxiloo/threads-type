'use client'

import styles from './profile-about.module.scss';
import { useContextValue } from '../provider/context-provider';
import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../provider/profile-provider';
import Preloader from '../preloader/preloader';
import ModalChange from '../modal-change/modal-change';
import Input from '../input/input';
import { getUser, updateUser } from '@/api/api';
import { FeedPageContext } from '../provider/feed-page-provider';
import Posts from '../posts/posts';
import ProfileAboutCurrent from '../profile-about-current/profile-about-current';

function ProfileAbout() {



    return (
        
    )
}

export default ProfileAbout