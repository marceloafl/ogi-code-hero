export default function CharacterSkeleton() {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col gap-8">
        <div className="flex gap-9 items-center">
          <div className="w-20 h-20 bg-snow rounded-lg animate-pulse"></div>
          <div className="w-1/3 h-8 bg-snow rounded-lg animate-pulse"></div>
        </div>
        <div className="w-full h-6 bg-snow rounded-lg animate-pulse"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <div className="w-1/4 h-8 bg-snow rounded-lg animate-pulse"></div>
          <div className="space-y-2">
            <div className="w-full h-4 bg-snow rounded-lg animate-pulse"></div>
            <div className="w-full h-4 bg-snow rounded-lg animate-pulse"></div>
            <div className="w-full h-4 bg-snow rounded-lg animate-pulse"></div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="w-1/4 h-8 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="space-y-2">
            <div className="w-full h-4 bg-snow rounded-lg animate-pulse"></div>
            <div className="w-full h-4 bg-snow rounded-lg animate-pulse"></div>
            <div className="w-full h-4 bg-snow rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
