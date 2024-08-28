import Search from "@/components/input/search/Search";
import PageTitle from "@/components/page-title/PageTitle";
import ListRow from "@/components/list/list-row/ListRow";
import { getCharacters } from "@/services/characters-api/requests";
import CharacterList from "@/components/list/character-list/CharacterList";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <PageTitle title="Busca de personagens" />
        <Search
          id="character-name"
          label="Nome do personagem"
          placeholder="Search"
        />
        <CharacterList />
      </div>
    </>
  );
}
