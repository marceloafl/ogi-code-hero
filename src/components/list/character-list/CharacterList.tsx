"use client";

import ListRow from "@/components/list/list-row/ListRow";
import { getCharacters } from "@/services/characters-api/requests";
import { useEffect, useState } from "react";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data.data.results);
        console.log(data);
      } catch (err) {}
    };

    fetchCharacters();
  }, []);

  return (
    <ul className="flex flex-col gap-2">
      {characters.map((character) => (
        <ListRow key={character.id} character={character} />
      ))}
    </ul>
  );
}
