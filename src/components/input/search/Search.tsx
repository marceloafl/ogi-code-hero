import Image from "next/image";

export default function Search({
  label,
  placeholder,
  id,
}: {
  label?: string;
  placeholder?: string;
  id: string;
}) {
  return (
    <section className="flex flex-col gap-2">
      <label htmlFor={`search-${id}`} className="font-bold">
        {label}
      </label>
      <div className="flex gap-1 bg-white h-8 w-72 rounded-md px-2">
        <input
          id={`search-${id}`}
          name={`search-${id}`}
          type="text"
          placeholder={placeholder}
          className="bg-transparent w-full h-full outline-none"
        />
        <div className="w-fit p-2 relative">
          <Image src={"/icon-search.svg"} alt="" fill />
        </div>
      </div>
    </section>
  );
}
