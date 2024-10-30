import { TPost, TUser } from '@/types/types';
import styles from './post.module.scss';
import { useContext, useEffect, useState } from 'react';
import { deletePost, setLike, unsetLike } from '@/api/api';
import { FeedPageContext } from '../provider/feed-page-provider';
import { ProfileContext } from '../provider/profile-provider';
import { useContextValue } from '../provider/context-provider';



function Post({post}: TPost) {

    const [likeStyle, setLikeStyle] = useState<boolean>(false);
    const [likeLength, setLikeLength] = useState<number>();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const {comments, setIsImageCliked, setImageUrl} = useContext(FeedPageContext);
    const {user} = useContext(ProfileContext);

    const userPost = post?.owner;
    const cardLikes = post?.likes;

    const handleDeletePost = (id: string) => {
        deletePost(id);
        setIsVisible(false);
    };

    const likeToggle = () => {
        setLikeStyle(prevLike => !prevLike);
        if(likeStyle) {
            setLikeLength(prevLength => prevLength - 1);
        } else {
            setLikeLength(prevLength => prevLength + 1)
        }
    };

    const isLiked = (likesArray) => {
        return likesArray.some(element => element?._id === user?._id)
    };

    async function handleLikeButton(item) {
        try {
            if(likeStyle) {
                await unsetLike(item);
                setLikeStyle(false);
            } else {
                await setLike(item);
                setLikeStyle(true);  
            }
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setLikeStyle(isLiked(cardLikes));
    }, [cardLikes]);

    useEffect(() => {
        setLikeLength(cardLikes.length)
    }, [cardLikes.length]);

    // console.log(post)
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return `${date.toLocaleTimeString()} | ${date.toLocaleDateString()}`;
    };

    const handleOpenImage = (id) => {

    }

    if (!isVisible) {
        return null
    };

    return (
        <>
            <section className={styles.section}>
                <img src={userPost.avatar} alt='Avatar' className={styles.avatar}/>
                <div className={styles.post_data}>
                    <div className={styles.top_box}>
                        <div className={styles.top_box_left}>
                            <div className={styles.nickname_container}>
                                <h3 className={styles.nickname}>{userPost.name}</h3>
                            </div>
                            <span className={styles.time}>{formatDate(post?.createdAt)}</span>
                        </div>
                        {user?._id === userPost?._id ? <div onClick={() => setIsOpen(!isOpen)} className={styles.dots}></div> : null}
                        <div className={isOpen ? styles.dropdown : styles.dropdown_disabled}>
                            <span onClick={() => {
                                handleDeletePost(post?._id)
                                setIsOpen(false)
                            }} className={styles.delete_text}>Удалить</span>
                        </div>
                    </div>
                    
                    <h4 className={styles.name}>{post?.name}</h4>
                    <div onClick={() => {
                        setIsImageCliked(true)
                        setImageUrl(post?.link)
                        }} className={styles.picture_box}>
                        <img src={post?.link} alt='Picture' className={styles.picture} />
                    </div>
                    
                    <div className={styles.likes_box}>
                        <div onClick={() => {
                            likeToggle();
                            handleLikeButton(post);
                        }} className={likeStyle ? styles.like_active : styles.like}></div>
                        <span className={styles.likes_number}>{likeLength}</span>
                    </div>

                    <div>
                        
                    </div>
                    
                </div>
            </section>
            <div className={styles.border_bottom}></div>
        </>
        
    )
}

export default Post