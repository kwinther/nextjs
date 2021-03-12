import Head from "next/head";
import styles from "../styles/Characters.module.css";
import Link from "next/link";

export default function CharacterItem({ character }) {
  return (
    <Link href="/character/[id]" as={`/character/${character.id}`}>
      <div className={styles.card}>
        <img src={character.image} />
        <h3>{character.name}</h3>
      </div>
    </Link>
  );
}
