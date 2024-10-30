import styles from './preloader-refresh.module.scss';


function PreloaderRefresh() {
    return(
        <div className={styles.container}>
            <span className={styles.loader}></span>
        </div>
        
    )
}

export default PreloaderRefresh