import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>EPIC FAGFREDAG</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Fagfredag is awesomeblossom" />
        <meta name="keywords" content="React, CSS, JavaScript" />
        <meta name="author" content="Krystjan Wyjnther" />
      </Head>
      <div className={styles.topnav}>
        <Link href="/">
          <a>Heim</a>
        </Link>
        <Link href="/about">Om fagfredag</Link>
        <Link href="/characters">Characters</Link>
      </div>
      <main className={styles.main}>{children}</main>
      <div className={styles.footer}>
        <h3>Norconsult Informasjonssystemer FAGFREDAAAAAG</h3>
      </div>
    </div>
  );
}
