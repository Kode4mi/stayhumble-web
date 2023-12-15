"use client";

export default function Header() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[56%] flex items-center justify-between bg-slate-100 dark:bg-black">
      <button className="text-black font-bold px-4 py-7 w-1/2 border-black border-y border-l transition duration-300 hover:bg-gray-200 dark:hover:bg-stone-900 dark:text-white dark:border-white ">Dla Ciebie</button>
      <button className="text-black font-bold px-4 py-7 w-1/2 border-black border-y border-x transition duration-300 hover:bg-gray-200 dark:hover:bg-stone-900 dark:text-white dark:border-white ">Obserwujesz</button>
    </div>
  );
}
