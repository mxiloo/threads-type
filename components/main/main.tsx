import styles from "./main.module.scss";

import Feed from "../feed/feed";

const Main = () => {
 
  return (
    <main className={styles.main}>
      <Feed />
    </main>
  )
};

export default Main;