interface Comic {
  name: string;
  resourceURI: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
}

interface Serie {
  name: string;
  resourceURI: string;
}

interface CharacterMediaProps<T> {
  title: string;
  items: T[];
  emptyMessage: string;
}

export default function CharacterMedia<T extends Comic | Serie>({
  title,
  items,
  emptyMessage,
}: CharacterMediaProps<T>) {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {items && items.length > 0 ? (
        <ul className="pl-5">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>{emptyMessage}</p>
      )}
    </div>
  );
}
