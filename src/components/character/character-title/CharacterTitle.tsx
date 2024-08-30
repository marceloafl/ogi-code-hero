import Image from "next/image";

interface CharacterTitleProps {
  name: string;
  description: string;
  thumbnail: string;
}

export default function CharacterTitle({
  name,
  description,
  thumbnail,
}: CharacterTitleProps) {
  return (
    <div className="flex flex-col gap-8 bg-white p-6 rounded-lg shadow-custom-light">
      <div className="flex gap-9 items-center">
        <figure className="w-20 h-20 rounded-lg overflow-hidden relative flex-shrink-0">
          {thumbnail && (
            <Image src={`${thumbnail}`} alt={name} fill sizes="5rem" />
          )}
        </figure>
        <h1 className="text-xl md:text-4xl font-bold">{name}</h1>
      </div>
      {description && <p className="md:ml-28">{description}</p>}
    </div>
  );
}
