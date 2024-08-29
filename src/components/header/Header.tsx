import Image from "next/image";
import HeaderTitle from "./header-title/HeaderTitle";
import Link from "next/link";

export default function Header() {
  return (
    <section className="flex items-center justify-between h-16 px-6 py-4 ">
      <Link href={"/"} className="cursor-pointer">
        <figure className="w-24 h-6 relative">
          <Image src={"/objective-logo.svg"} alt="Objective logo" fill />
        </figure>
      </Link>
      <HeaderTitle candidateName="Marcelo Lemes" />
    </section>
  );
}
