"use client";

import MediaSkeleton from "@/components/skeleton/media-skeleton/MediaSkeleton";
import { getMedias } from "@/services/medias/request";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Media {
  title: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
}

interface CharacterMediaProps<T> {
  title: string;
  characterId: string;
  emptyMessage: string;
  mediaType: "comics" | "series";
}

export default function CharacterMedia<T extends Media>({
  title,
  characterId,
  emptyMessage,
  mediaType,
}: CharacterMediaProps<T>) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedias = async () => {
      try {
        const response = await getMedias(characterId, mediaType);
        const items: Media[] = response.data.results.map((item: any) => ({
          title: item.title,
          thumbnail: {
            path: item.thumbnail?.path,
            extension: item.thumbnail?.extension,
          },
        }));
        setItems(items);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedias();
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-4 bg-white rounded-lg p-4 shadow-custom-light">
      <h2 className="text-2xl font-bold">{title}</h2>
      {loading ? (
        <MediaSkeleton />
      ) : items.length > 0 ? (
        <ul className="pl-5 flex flex-col gap-8">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="rounded-lg overflow-hidden min-h-16 min-w-16 relative">
                <Image
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.title}
                  fill
                  sizes="4rem"
                />
              </div>
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>{emptyMessage}</p>
      )}
    </div>
  );
}
