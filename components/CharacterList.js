import styles from "../styles/Characters.module.css";
import CharacterItem from "./CharacterItem";

export default function CharacterList({ characters }) {
  return (
    <div className={styles.grid}>
      {characters.map((character) => {
        return <CharacterItem character={character} key={character.id} />;
      })}
    </div>
  );
}
