import styles from './posts.module.scss';
import { useContext } from "react";
import Post from '../post/post';
import { FeedPageContext } from '../provider/feed-page-provider';

function Posts() {

    const {posts} = useContext(FeedPageContext);
    
    return(
        <section>
            <div className={styles.content}>
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
        </section>
    )
}

export default Posts