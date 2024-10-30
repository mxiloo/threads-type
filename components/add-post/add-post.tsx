'use client'

import { useContext, useEffect, useRef, useState } from 'react';
import styles from './add-post.module.scss';
import Input from '../input/input';
import { button } from '@/constants/constants';
import { setPost } from '@/api/api';
import { ProfileContext } from '../provider/profile-provider';
import Link from 'next/link';
import { FeedPageContext } from '../provider/feed-page-provider';


function AddPost() {

    const [text, setText] = useState<string>('');
    const [placeholderPost, setPlaceholderPost] = useState<string[]>([
        "What's new?",
        "How is your day going?",
        "What did you see today?",
        "How is the weather?",
        "How are you feeling?"
    ]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [imageUrl, setImageUrl] = useState<string>('');

    const {setPosts} = useContext(FeedPageContext);

    const {user} = useContext(ProfileContext);

    const inputRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleInput = () => {
            if (inputRef?.current) {
                setText(inputRef?.current?.innerText);
            }
        };
        inputRef.current?.addEventListener('input', handleInput);

        return () => {
            inputRef.current?.removeEventListener('input', handleInput);
        };
    }, []);

    const handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setText(evt.target.value)
    };

    const handleClearPost = () => {
        if (inputRef.current) {
            inputRef.current.innerText = '';
        }
    };

    useEffect(() => {
        let intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % placeholderPost.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, [placeholderPost]);

    return(
        <section className={styles.section}>

            <Link className={styles.link} href={'/profile'}><img src={user?.avatar} alt='avatar' className={styles.avatar} /></Link>
            

            <div className={styles.top_box}>
                <Link className={styles.link} href={'/profile'}><h2 className={styles.nickname}>{user?.name}</h2></Link>
                <></>
                <div className={styles.text_box}>
                    <div 
                        id='postText' 
                        ref={inputRef}
                        className={styles.post_text} 
                        contentEditable="true" 
                        role="textbox" 
                        aria-multiline="true" 
                        onChange={handleChangeInput}
                    ></div>
                    {text ? null : <span className={styles.post_text_placeholder}>{placeholderPost[currentIndex]}</span>}
                </div>
                
                <div className={styles.border_bottom}></div>

                <div className={styles.picture_box}>
                    <span className={styles.picture_box_text}>Add photo:</span>
                    <div className={styles.vertical}></div>
                    <Input value={imageUrl} placeholder='Put link here' setValue={setImageUrl} />
                </div>
            </div>

            {!text || !imageUrl ? (
                <button disabled style={button}>    
                    <div className={styles.send_box_disabled}>
                        <div className={styles.send_disabled}></div> 
                    </div>
                </button>
            ) : (
                <button style={button} onClick={() => {
                    setPost(text, imageUrl).then((res) => {
                        setPosts(prevPosts => [res, ...prevPosts]);
                    });
                    setText('');
                    setImageUrl('');
                    handleClearPost();
                }}>    
                    <div className={styles.send_box}>
                        <div className={styles.send}></div> 
                    </div>
                </button>
            )}
        </section>
    )
}

export default AddPost