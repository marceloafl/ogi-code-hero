import Image from "next/image";
import HeaderTitle from "./header-title/HeaderTitle";

export default function Header() {
  return (
    <section className="flex items-center justify-between h-16 px-6 py-4 ">
      <figure>
        <Image src={"/objective-logo.svg"} alt="" width={96} height={24} />
      </figure>
      <HeaderTitle candidateName="Marcelo Lemes" />
    </section>
  );
}
