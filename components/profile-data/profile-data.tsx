import ProfileAbout from '../profile-about/profile-about';
import styles from './profile-data.module.scss';


function ProfileData() {

    return (
        <section className={styles.section}>
            <ProfileAbout />
        </section>
    )
}

export default ProfileData