'use client'
import { useContext } from 'react';
import styles from './header-navigation.module.scss';
import { FeedPageContext } from '../provider/feed-page-provider';
import { HeaderContext } from '../provider/header-provider';
import { getCards } from '@/api/api';
import { useContextValue } from '../provider/context-provider';


function HeaderNavigation({value}) {

    const {setIsRefreshed} = useContextValue();
    const {setPosts} = useContext(FeedPageContext);

    const refreshData = async () => {
        try {
            setIsRefreshed(true);
            const data = await getCards();
            setPosts(data);
            setTimeout(() => {
            setIsRefreshed(false);
            }, 2000)
            
        } catch (error) {
            console.log(error)
            setIsRefreshed(false);
        }
    };

    const scrollToTop = () => {
        if(window.scrollY > 100) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
    };
    

    return (
        <div className={styles.top_navigation}>
          <span onClick={() => {
            scrollToTop();
            if (value === 'Главная') {
              refreshData();
            }
          }} className={styles.text}>{value}</span>
        </div>
    )
}

export default HeaderNavigation