import { Dispatch, SetStateAction } from 'react';
import styles from './input.module.scss';

type TInput = {
    value: string | undefined,
    setValue: Dispatch<SetStateAction<string>>,
    placeholder: string | undefined
};

function Input({value, setValue, placeholder}: TInput) {

    const handleClear = () => {
        setValue('')
    };

    return(
        <label className={styles.box}>
            <div className={styles.input_box}>
                <input className={styles.input} value={value !== undefined ? value : ''} onChange={e => setValue(e.target.value)} type={'text'} />
                <div className={value ? styles.placeholder_custom_active : styles.placeholder_custom}>{placeholder}</div>
                {value ? <div className={styles.clear} onClick={() => handleClear()}></div> : null}
            </div>
        </label>
    )
}

export default Input