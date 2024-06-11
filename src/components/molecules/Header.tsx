"use client";

export default function Header() {
  return (
    <div className="flex items-center justify-between dark:bg-gray-900 text-xl pb-4">
      <button className="text-black font-bold relative px-4 py-7 w-1/2 transition-all hover:scale-105 dark:text-white dark:border-white ">
        <span>Dla Ciebie</span>
        <span className="absolute bottom-0 mb-2 left-1/4 w-1/2 h-[1px] bg-orange-500"></span>
      </button>
      <button className="text-black font-bold relative px-4 py-7 w-1/2 transition-all hover:scale-105 dark:text-white dark:border-white ml-2 ">
        <span>Obserwujesz</span>
        <span className="absolute bottom-0 mb-2 left-1/4 w-1/2 h-[1px] bg-slate-300 dark:bg-white"></span>
      </button>
    </div>
  );
}
