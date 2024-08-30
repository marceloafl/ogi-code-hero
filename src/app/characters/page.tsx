"use client";

import CharacterMediaSection from "@/components/character/character-media-section/CharacterMediaSection";
import CharacterTitle from "@/components/character/character-title/CharacterTitle";
import CharacterSkeleton from "@/components/skeleton/character-skeleton/CharacterSkeleton";
import { getCharacterById } from "@/services/character-by-id/requests";
import { useEffect, useState } from "react";

export interface PageProps {
  params?: Record<string, string>;
  searchParams?: { [key: string]: string | undefined };
}

export default function Character({ searchParams }: PageProps) {
  const [character, setCharacter] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const characterId = searchParams?.["id"];

  useEffect(() => {
    if (characterId) {
      const fetchCharacter = async () => {
        try {
          setLoading(true);
          const data = await getCharacterById(characterId);
          setCharacter(data.data.results[0]);
        } catch (error) {
          setError("Failed to fetch character");
        } finally {
          setLoading(false);
        }
      };

      fetchCharacter();
    }
  }, [characterId]);

  if (loading) return <CharacterSkeleton />;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col gap-9 bg-white p-8 rounded-lg">
      {character ? (
        <>
          <CharacterTitle
            name={character.name}
            description={character.description}
            thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
          <CharacterMediaSection character={character} />
        </>
      ) : (
        <p>Nenhum personagem encontrado.</p>
      )}
    </div>
  );
}
