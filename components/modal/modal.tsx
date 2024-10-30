import { useContext } from 'react';
import styles from './modal.module.scss';
import { FeedPageContext } from '../provider/feed-page-provider';
import Overlay from '../overlay/overlay';


function Modal() {

    const {imageUrl, setIsImageCliked} = useContext(FeedPageContext);

    const onClose = () => {
        setIsImageCliked(false)
    }

    return(
        <>
            <section className={styles.modal}>
                <img className={styles.image} src={imageUrl} />
                <div className={styles.container}>
                    <div className={styles.comments}></div>
                </div>
            </section>
            <Overlay onClose={onClose}/>
        </>
        
    )
}

export default Modal