'use client'

import Link from 'next/link';
import styles from './header.module.scss';
import { useState, useEffect, useRef } from "react";
import HeaderNavigation from '../header-navigation/header-navigation';
import { useContextValue } from '../provider/context-provider';

const Header = () => {
  
  const [headerClass, setHeaderClass] = useState(styles.container_top);
  const {refreshValue} = useContextValue();

  const myRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderClass(styles.container);
      } else {
        setHeaderClass(styles.container_top);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {

    const headerElement = myRef.current;

    if (!headerElement) return;

    const onMouseEnter = () => {
      if (headerClass !== styles.container_top) {
        setHeaderClass(styles.container_top);
      }
    };

    const onMouseLeave = () => {
      if (window.scrollY > 100) {
        setHeaderClass(styles.container);
      } else {
        setHeaderClass(styles.container_top);
      }
    };

    headerElement.addEventListener('mouseenter', onMouseEnter);
    headerElement.addEventListener('mouseleave', onMouseLeave);

    return () => {
      headerElement.removeEventListener('mouseenter', onMouseEnter);
      headerElement.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [headerClass]);
  

  return (
    <header ref={myRef} className={headerClass}>

      <div className={styles.box}>
        <Link href={'/'}><div className={styles.logo}></div></Link>

        <HeaderNavigation value={refreshValue}/>
        
        <Link href={'/login'} className={styles.button_text}>
          Login
        </Link>
      </div>
  
    </header>
  )
};

export default Header;