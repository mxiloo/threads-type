import styles from './posts.module.scss';
import Post from '../post/post';

function Posts({posts}: any) {

    const lastPostIndex: number = posts?.length - 1;
    
    return(
        <section>
            <div className={styles.content}>
                {posts.map((post, index: number) => (
                    <div key={index}>
                        <Post  post={post} index={index} lastPostIndex={lastPostIndex}/>
                        {lastPostIndex === index ? null : <div  className={styles.border_bottom}></div>}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Posts