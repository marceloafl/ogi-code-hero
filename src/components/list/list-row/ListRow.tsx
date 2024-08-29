import Image from "next/image";
import { ptSans } from "@/styles/fonts";

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
      className="flex justify-between items-center gap-6 bg-white w-full max-h-[88px] px-6 py-5 rounded-lg shadow-custom-light hover:shadow-custom-dark transition-shadow duration-300 cursor-pointer"
    >
      <div className="flex flex-1 items-center gap-6 font-bold">
        <figure className="rounded-lg overflow-hidden h-12 w-12 relative">
          <Image src={image} alt="" fill sizes="3rem" />
        </figure>
        <p>{name}</p>
      </div>
      <div className="flex-1 text-sm">
        <ul>
          {series.map((serie, index) => (
            <li key={index}>{serie}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 text-sm">
        <ul>
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
