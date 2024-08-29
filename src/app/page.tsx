import PageTitle from "@/components/page-title/PageTitle";
import CharacterList from "@/components/list/character-list/CharacterList";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <PageTitle title="Busca de personagens" />
      <CharacterList />
    </div>
  );
}
