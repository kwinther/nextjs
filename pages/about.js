import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>OM FAGFREDAG</title>
      </Head>
      <div>
        <h1 className={styles.title}> Fagfredag er awesome</h1>
        <div className={styles.description}>Spread ur knowledge! Free XP!!</div>
      </div>
    </div>
  );
}
