import Posts from '../posts/posts';
import styles from './feed.module.scss';
import AddPost from '../add-post/add-post';
import { useContext } from 'react';
import { FeedPageContext } from '../provider/feed-page-provider';
import Preloader from '../preloader/preloader';
import { HeadManagerContext } from 'next/dist/shared/lib/head-manager-context.shared-runtime';
import { HeaderContext } from '../provider/header-provider';
import PreloaderRefresh from '../preloader-refresh/preloader-refresh';
import Modal from '../modal/modal';
import { useContextValue } from '../provider/context-provider';

function Feed() {

    const {isRefreshed} = useContextValue();
    const {isImageCliked} = useContext(FeedPageContext);
    const {isLoading} = useContextValue();

    if (isLoading) {
        return <Preloader />
    }

    return(
        <>  
            <div className={isRefreshed ? styles.preloader_active : styles.preloader_disable}>
                <PreloaderRefresh />
            </div> 

            <section className={isRefreshed ? styles.section_move : styles.section}>
                <AddPost />
                <Posts />
            </section>
            {isImageCliked ? <Modal /> : null}
            {}
        </>
    )
}

export default Feed