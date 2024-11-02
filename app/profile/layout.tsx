'use client'

import { ProfileContext } from '@/components/provider/profile-provider';
import styles from './profile-layout.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { useContextValue } from '@/components/provider/context-provider';
import { updateUser } from '@/api/api';
import Preloader from '@/components/preloader/preloader';
import ProfileAboutCurrent from '@/components/profile-about-current/profile-about-current';
import ModalChange from '@/components/modal-change/modal-change';
import Input from '@/components/input/input';

function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const currentPath = usePathname();

    const {user, setIsClickedChange, isClickedChange} = useContext(ProfileContext);
    const {isLoading, setRefreshValue} = useContextValue();
    
    const [updateName, setUpdateName] = useState<string | undefined>('');
    const [updateAbout, setUpdateAbout] = useState<string | undefined>('');

    const [currentName, setCurrentName] = useState<string | undefined>('');
    const [currentAbout, setCurrentAbout] = useState<string | undefined>('');
 
    useEffect(() => {
        setRefreshValue('Профиль')
    }, []);

    const handleClose = (value: boolean) => {
        setIsClickedChange(value);
    };

    const fetchUpdate = (name, about, e) => {
        e.preventDefault();
        updateUser(name, about);
        handleClose(false);
        setCurrentName(updateName)
        setCurrentAbout(updateAbout)
    };

    const currentStyleLink = (value: string | undefined) => {
        return currentPath === value ? styles.tabs_link_active : styles.tabs_link_disable
    };

    const currentStyleBorder = (value: string | undefined) => {
        return currentPath === value ? styles.tabs_border_active : styles.tabs_border_disable
    };
    
    if (isLoading) {
        <Preloader />
    };

    return (
        <>
        <section className={styles.section}>
            
            <ProfileAboutCurrent user={user} currentName={currentName} currentAbout={currentAbout} handleClose={handleClose} />

            {isClickedChange ? (
                <ModalChange onclose={() => handleClose(false)}>
                    <form onSubmit={(e) => fetchUpdate(updateName, updateAbout, e)}>
                        <Input value={updateName} setValue={setUpdateName} placeholder={'Введите имя...'}/>
                        <div className={styles.border_bottom}></div>
                        <Input value={updateAbout} setValue={setUpdateAbout} placeholder={'Напишите описание...'}/>      
                        <div className={styles.border_bottom}></div>
                        {!updateName || !updateAbout ? 
                        <button disabled className={styles.submit_disabled}>Сохранить</button> : 
                        <button className={styles.submit}>Сохранить</button>}     
                    </form>
                </ModalChange>
                ) : null}
            <div className={styles.tabs_container}>
                <Link href={'/profile'} className={currentStyleLink('/profile')}>
                    <div className={styles.navigation_box}>
                        <span className={styles.tabs_text}>Посты</span>
                        <div className={currentStyleBorder('/profile')}></div>
                    </div>
                </Link>
            
                <Link href={'/profile/reposts'} className={currentStyleLink('/profile/reposts')}>
                    <div className={styles.navigation_box}>
                        <span className={styles.tabs_text}>Репосты</span>
                        <div className={currentStyleBorder('/profile/reposts')}></div>
                    </div>
                </Link>
            </div>
            
        </section>

        {isLoading ? (
            <Preloader />
        ) : (
            <div className={styles.content_box}>
                {children}
            </div>
        )}    
        </>
        
    )
}

export default ProfileLayout