export interface ListTitleProps {
  titles: {
    title: string;
    visibleOnMobile: boolean;
  }[];
}

export default function ListTitle({ titles }: ListTitleProps) {
  return (
    <div className="flex justify-between items-center gap-6 px-6 w-full text-xs text-smoke">
      <p className="flex-1 text-sm">Personagem</p>
      <p className="md:flex flex-1 text-sm hidden">Séries</p>
      <p className="md:flex flex-1 text-sm hidden">Eventos</p>
    </div>
  );
}
