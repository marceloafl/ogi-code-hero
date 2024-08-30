export default function HeaderTitle({
  candidateName,
}: {
  candidateName: string;
}) {
  const getInitials = (candidateName: string) => {
    const splitedNames = candidateName.trim().split(/\s+/);
    return splitedNames.map((name) => name.charAt(0).toUpperCase()).join("");
  };

  return (
    <div className="flex items-center justify-between gap-2 md:gap-4 text-sm">
      <div className="flex flex-col md:flex-row justify-between md:gap-2">
        <p className="font-bold">{candidateName}</p>
        <p>Teste de Front-end</p>
      </div>
      <div className="bg-snow rounded p-1 font-bold w-8 h-8 flex items-center justify-center">
        <p>{getInitials(candidateName)}</p>
      </div>
    </div>
  );
}
