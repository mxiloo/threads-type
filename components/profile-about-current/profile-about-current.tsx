
import ProfileLayout from '@/app/profile/layout';
import styles from './profile-about-current.module.scss';

function ProfileAboutCurrent({user, currentName, currentAbout, handleClose}) {

    return (
        <>
            <div className={styles.top_container}>
                <div className={styles.text_box}>
                    <h2 className={styles.name}>{!currentName ? user?.name : currentName}</h2>
                    <span className={styles.about}>{!currentAbout ? user?.about : currentAbout}</span>
                </div>
                <img src={user?.avatar} alt='Avatar' className={styles.avatar}/>
            </div>
            <button onClick={() => handleClose(true)} className={styles.button}>Редактировать профиль</button>
        </>
    )
}

export default ProfileAboutCurrent