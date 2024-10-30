import styles from './overlay.module.scss';

interface Overlay {
    onClose: () => void
};

function Overlay({onClose}: Overlay) {
    return (
        <>
            <div onClick={onClose} className={styles.overlay}></div>
            <div onClick={onClose} className={styles.cancel}></div>
        </>
    )
}

export default Overlay