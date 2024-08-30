import CharacterMedia from "../character-media/CharacterMedia";

export default function CharacterMediaSection({
  characterId,
}: {
  characterId: string;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <CharacterMedia
        title="Comics"
        characterId={characterId}
        emptyMessage="Este personagem não participou de nenhuma comic."
        mediaType="comics"
      />
      <CharacterMedia
        title="Series"
        characterId={characterId}
        emptyMessage="Este personagem não participou de nenhuma série."
        mediaType="series"
      />
    </div>
  );
}
