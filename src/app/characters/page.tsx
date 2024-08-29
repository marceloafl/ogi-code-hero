"use client";

import { getCharacterById } from "@/services/character-by-id/requests";
import Image from "next/image";
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
  const [comics, setComics] = useState([]);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col gap-9">
      {character ? (
        <>
          <div className="flex flex-col gap-8">
            <div className="flex gap-9 items-center">
              <figure className="w-20 h-20 rounded-lg overflow-hidden relative flex-shrink-0">
                {character.thumbnail && (
                  <Image
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                    fill
                    sizes="5rem"
                  />
                )}
              </figure>
              <h1 className="text-4xl font-bold">{character.name}</h1>
            </div>
            <p>{character.description}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Comics</h2>
              {character.comics && character.comics.items.length > 0 ? (
                <ul className="pl-5">
                  {character.comics.items.map(
                    (
                      comic: {
                        name: string;
                        resourceURI: string;
                        thumbnail?: { path: string; extension: string };
                      },
                      index: number
                    ) => (
                      <li key={index} className="flex items-center gap-4">
                        {comic.name}
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p>Este personagem não participou de nenhuma comic.</p>
              )}
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Séries</h2>
              {character.series && character.series.items.length > 0 ? (
                <ul className="pl-5">
                  {character.series.items.map(
                    (
                      serie: {
                        name: string;
                        resourceURI: string;
                      },
                      index: number
                    ) => (
                      <li key={index} className="flex items-center gap-4">
                        {serie.name}
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p>Este personagem não participou de nenhuma série.</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Nenhum personagem encontrado.</p>
      )}
    </div>
  );
}
