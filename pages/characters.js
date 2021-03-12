import Head from "next/head";
import styles from "../styles/Characters.module.css";
import CharacterList from "../components/CharacterList";

export default function Characters({ characters }) {
  console.log(characters);
  return (
    <div className={styles.container}>
        <CharacterList characters={characters} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const chars = await res.json();
  const characters = await chars.results;

  return {
    props: {
      characters,
    },
  };
};
