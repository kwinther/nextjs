import { useRouter } from "next/router";
import styles from "../../../styles/Characters.module.css";

export default function CharacterList({ character }) {
  console.log(character);
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <div className={styles.title}>{character.name}</div>
      <div className={styles.description}>{character.gender}</div>

      <div className={styles.card}>
        <img src={character.image} />
      </div>
      <div className={styles.description}>{character.species}</div>
      <div className={styles.description}>{character.status}</div>
    </div>
  );
}

// HENTET VED KALL
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://rickandmortyapi.com/api/character/${context.params.id}`
//   );
//   const character = await res.json();

//   return {
//     props: {
//       character,
//     },
//   };
// };

//HENTER VED BYGGING.
export const getStaticPaths = async (context) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const characters = await res.json();

  const characterIds = characters.results.map((character) => character.id);
  const paths = characterIds.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    //404 istedenfor kræsj
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.params.id}`
  );
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};
