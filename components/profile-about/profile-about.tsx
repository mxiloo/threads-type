'use client'

import styles from './profile-about.module.scss';
import { useContextValue } from '../provider/context-provider';
import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../provider/profile-provider';
import Preloader from '../preloader/preloader';
import ModalChange from '../modal-change/modal-change';
import Input from '../input/input';
import { getUser, updateUser } from '@/api/api';

function ProfileAbout() {

    const {user, setIsClickedChange, isClickedChange} = useContext(ProfileContext);
    const {isLoading, setRefreshValue} = useContextValue();

    const [updateName, setUpdateName] = useState<string | undefined>('');
    const [updateAbout, setUpdateAbout] = useState<string | undefined>('');

    const [currentName, setCurrentName] = useState<string | undefined>('');
    const [currentAbout, setCurrentAbout] = useState<string | undefined>('');
 
    useEffect(() => {
        setRefreshValue('Профиль')
    }, []);

    const handleClose = () => {
        setIsClickedChange(false);
    };

    const fetchUpdate = (name, about, e) => {
        e.preventDefault();
        updateUser(name, about);
        handleClose();
        setCurrentName(updateName)
        setCurrentAbout(updateAbout)
    };

    if (isLoading) {
        <Preloader />
    };

    return (
        <section className={styles.section}>
            <div className={styles.top_container}>
                <div className={styles.text_box}>
                    <h2 className={styles.name}>{!currentName ? user?.name : currentName}</h2>
                    <span className={styles.about}>{!currentAbout ? user?.about : currentAbout}</span>
                </div>
                <img src={user?.avatar} alt='Avatar' className={styles.avatar}/>
            </div>
            <button onClick={() => setIsClickedChange(true)} className={styles.button}>Редактировать профиль</button>
            <div>
                <span>Посты</span>
                <span>Репосты</span>
            </div>

            {isClickedChange ? (
                <ModalChange onclose={handleClose}>
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
        </section>
    )
}

export default ProfileAbout