import styles from './posts.module.scss';
import Post from '../post/post';

function Posts({posts}: any) {

    const lastPostIndex: number = posts?.length - 1;
    
    return(
        <section>
            <div className={styles.content}>
                {posts.map((post, index: number) => (
                    <>
                        <Post key={index} post={post} index={index} lastPostIndex={lastPostIndex}/>
                        {lastPostIndex === index ? null : <div key={index} className={styles.border_bottom}></div>}
                    </>
                ))}
            </div>
        </section>
    )
}

export default Posts