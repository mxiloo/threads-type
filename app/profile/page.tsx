import ProfileData from '@/components/profile-data/profile-data';
import styles from './profile.module.scss';
import ModalChange from '@/components/modal-change/modal-change';


function Profile() {
    return(
        <>
            <section className={styles.section}>
                <ProfileData />
            </section>
        </>   
        
    )
}

export default Profile