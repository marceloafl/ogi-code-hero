import Image from "next/image";
import HeaderTitle from "./header-title/HeaderTitle";

export default function Header() {
  return (
    <section className="flex items-center justify-between h-16 px-6 py-4 ">
      <figure className="w-24 h-6 relative">
        <Image src={"/objective-logo.svg"} alt="Objective logo" fill />
      </figure>
      <HeaderTitle candidateName="Marcelo Lemes" />
    </section>
  );
}
