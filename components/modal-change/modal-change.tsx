import styles from './modal-change.module.scss';
import Overlay from '../overlay/overlay';
import { ReactNode } from 'react';

interface Modal {
    children: ReactNode;
    onclose: () => void;
}

function ModalChange({children, onclose}: Modal) {
    return (
        <>
            <section className={styles.section}>
                {children}
            </section>
            <Overlay onClose={onclose}/>
        </>
    )   
}

export default ModalChange