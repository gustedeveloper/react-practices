import { FC, useState, useEffect, use } from "react";

interface Character {
  id: number;
  name: string;
  image: string;
}

export const MainComponent: FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.results);
        setFilteredCharacters(json.results);
      });
  }, []);

  useEffect(() => {
    const formattedFilter = filter.toLowerCase();
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(formattedFilter)
    );
    setFilteredCharacters(filtered);
  }, [filter, characters]);

  return (
    <>
      <div className="header">
        <h1>Búsqueda de Personajes de Rick and Morty</h1>
        <input
          className="input"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="main-container">
        {filteredCharacters.map((character) => (
          <div className="character-container" key={character.id}>
            <span>{character.name}</span>
            <img src={character.image} />
          </div>
        ))}
      </div>
    </>
  );
};
