export default function ListSkeleton() {
  return (
    <li className="flex justify-between items-center gap-6 bg-white w-full max-h-[88px] px-6 py-5 rounded-lg shadow-custom-light transition-shadow duration-300 cursor-pointer">
      <div className="flex flex-1 items-center gap-6 font-bold">
        <div className="bg-gray-200 rounded-lg h-12 w-12 relative animate-pulse"></div>
        <div className="bg-gray-200 h-4 w-full rounded animate-pulse"></div>
      </div>
      <div className="md:flex flex-1 text-sm hidden">
        <ul>
          {Array.from({ length: 3 }).map((_, index) => (
            <li
              key={index}
              className="bg-snow h-4 w-3/4 mb-2 rounded animate-pulse"
            ></li>
          ))}
        </ul>
      </div>
      <div className="md:flex flex-1 text-sm hidden">
        <ul>
          {Array.from({ length: 3 }).map((_, index) => (
            <li
              key={index}
              className="bg-gray-200 h-4 w-3/4 mb-2 rounded animate-pulse"
            ></li>
          ))}
        </ul>
      </div>
    </li>
  );
}
