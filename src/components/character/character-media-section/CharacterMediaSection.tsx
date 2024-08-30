import CharacterMedia from "../character-media/CharacterMedia";

export default function CharacterMediaSection({ character }) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <CharacterMedia
        title="Comics"
        items={character.comics?.items || []}
        emptyMessage="Este personagem não participou de nenhuma comic."
      />
      <CharacterMedia
        title="Series"
        items={character.series?.items || []}
        emptyMessage="Este personagem não participou de nenhuma série."
      />
    </div>
  );
}
