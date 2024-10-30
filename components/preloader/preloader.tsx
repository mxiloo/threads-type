import styles from './preloader.module.scss';

function Preloader() {
    return (
        <div className={styles.container}>
            <span className={styles.loader}></span>
        </div>
        
    )
}

export default Preloader