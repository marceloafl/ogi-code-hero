"use client";

import ListRow from "@/components/list/list-row/ListRow";
import ListSkeleton from "@/components/skeleton/ListSkeleton";
import { getCharacters } from "@/services/characters-api/requests";
import { useEffect, useState } from "react";
import { ptSans } from "@/styles/fonts";
import Pagination from "@/components/pagination/Pagination";
import Search from "@/components/input/search/Search";
import useDebounce from "@/hooks/useDebounce";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const resultsPerPage = 10;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const offset = (currentPage - 1) * resultsPerPage;
        const data = await getCharacters(
          resultsPerPage,
          offset,
          debouncedSearchTerm
        );
        setCharacters(data.data.results);
        setTotalPages(Math.ceil(data.data.total / resultsPerPage));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage, debouncedSearchTerm]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Search
        id="character-name"
        label="Nome do personagem"
        placeholder="Search"
        handleOnChange={handleSearch}
        searchTerm={searchTerm}
      />
      {loading ? (
        <ul className="flex flex-col gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <ListSkeleton key={index} />
          ))}
        </ul>
      ) : (
        <section className="flex flex-col gap-2">
          {characters.length > 0 ? (
            <>
              <div
                className={`${ptSans.className} flex justify-between items-center gap-6 px-6 w-full text-xs text-smoke`}
              >
                <p className="flex-1 text-sm">Personagem</p>
                <p className="flex-1 text-sm">Séries</p>
                <p className="flex-1 text-sm">Eventos</p>
              </div>

              <ul className={`${ptSans.className} flex flex-col gap-2`}>
                {characters.map((character) => (
                  <ListRow
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    series={character.series.items
                      .slice(0, 3)
                      .map((s) => s.name)}
                    events={character.events.items
                      .slice(0, 3)
                      .map((e) => e.name)}
                    image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  />
                ))}
              </ul>
            </>
          ) : (
            <p className="m-auto">Nenhum personagem encontrado</p>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      )}
    </>
  );
}
