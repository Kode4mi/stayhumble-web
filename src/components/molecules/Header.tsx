"use client";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-slate-100 dark:bg-black pb-4">
      <button className="text-black font-bold px-4 py-7 w-1/2 border-black border-b border-l transition duration-300 hover:bg-gray-200 dark:hover:bg-stone-900 dark:text-white dark:border-white ">Dla Ciebie</button>
      <button className="text-black font-bold px-4 py-7 w-1/2 border-black border-b border-x transition duration-300 hover:bg-gray-200 dark:hover:bg-stone-900 dark:text-white dark:border-white ">Obserwujesz</button>
    </div>
  );
};
