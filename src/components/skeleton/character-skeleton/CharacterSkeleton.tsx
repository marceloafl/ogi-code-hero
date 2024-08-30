export default function CharacterSkeleton() {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col gap-8">
        <div className="flex gap-9 items-center">
          <div className="w-20 h-20 bg-snow rounded-lg animate-pulse"></div>
          <div className="w-1/3 h-8 bg-snow rounded-lg animate-pulse"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full h-80 bg-snow rounded-lg animate-pulse"></div>
        <div className="w-full h-80 bg-snow rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
}
