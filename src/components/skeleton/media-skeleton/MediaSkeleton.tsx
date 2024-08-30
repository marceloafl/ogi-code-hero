export default function MediaSkeleton() {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <ul className="pl-5 space-y-4">
        {[...Array(5)].map((_, index) => (
          <li key={index} className="flex items-center gap-4 animate-pulse">
            <div className="bg-gray-300 w-16 h-16 rounded"></div>
            <div className="bg-gray-300 w-3/4 h-4 rounded"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
