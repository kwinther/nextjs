import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}> Velkommen til fagfredag </h1>
      <div className={styles.description}>hvor Next JS står i fokus</div>
    </div>
  );
}
