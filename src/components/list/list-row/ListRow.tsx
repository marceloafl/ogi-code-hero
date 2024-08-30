import Image from "next/image";
import { ptSans } from "@/styles/fonts";
import Link from "next/link";

interface ListRowProps {
  id: string;
  name: string;
  series: string[];
  events: string[];
  image: string;
}

export default function ListRow({
  id,
  name,
  series,
  events,
  image,
}: ListRowProps) {
  return (
    <li
      key={id}
      className=" bg-white w-full min-h-[88px] px-6 py-5 rounded-lg shadow-custom-light hover:shadow-custom-dark transition-shadow duration-300 cursor-pointer"
    >
      <Link
        href={`characters?id=${id}`}
        className="flex justify-between items-center gap-6"
      >
        <div className="flex flex-1 items-center gap-6 font-bold">
          <figure className="rounded-lg overflow-hidden h-12 w-12 relative">
            <Image src={image} alt={name} sizes="3rem" fill />
          </figure>
          <p>{name}</p>
        </div>
        <div className="md:flex flex-1 text-sm hidden">
          <ul>
            {series.map((serie, index) => (
              <li key={index}>{serie}</li>
            ))}
          </ul>
        </div>
        <div className="md:flex flex-1 text-sm hidden">
          <ul>
            {events.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
}
