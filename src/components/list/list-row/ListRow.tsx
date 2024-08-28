import Image from "next/image";
import { ptSans } from "@/styles/fonts";

export default function ListRow(character) {
  return (
    <li
      className={`${ptSans.className} flex justify-between items-center bg-white w-full h-[88px] px-6 py-5 rounded-lg shadow-custom-light hover:shadow-custom-dark transition-shadow duration-300`}
    >
      <div className="flex flex-1 items-center gap-6 font-bold">
        <figure className="bg-red-500 rounded-lg h-12 w-12 relative">
          <Image src={"/icon-search.svg"} alt="" fill />
        </figure>
        <p>{character.character.name}</p>
      </div>
      <div className="flex-1">
        <ul>
          <li>Iron Man: Armor Wars</li>
          <li>Old Man Hawkeye</li>
          <li>Fantastic Four Visionaries: Walter Simonson Vol. 1</li>
        </ul>
      </div>
      <div className="flex-1">
        <ul>
          <li>AvX</li>
          <li>Demon in the Bottle</li>
          <li>Dynasty M</li>
        </ul>
      </div>
    </li>
  );
}
