import styles from './posts.module.scss';
import Post from '../post/post';

function Posts({posts}: any) {
    
    return(
        <section>
            <div className={styles.content}>
                {posts.map((post, index: number) => (
                    <Post key={index} post={post}/>
                ))}
            </div>
        </section>
    )
}

export default Posts