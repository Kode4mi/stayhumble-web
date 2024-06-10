"use client";
import Link from "next/link";
import ColoredButton from "../atoms/commons/ColoredButton";
import AuthorInfo from "../atoms/AuthorInfo";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center justify-between bg-slate-200 dark:bg-[#090d15] p-4 h-full">
      <div>
        <Link href="/header">
          <h1 className="text-[4rem] font-bold pt-6 pb-8 text-center transition-all hover:scale-105">
            <span className="text-black dark:text-white">stay</span>
            <span className="text-orange-500">Humble</span>
          </h1>
        </Link>
        <div className="flex justify-center w-full">
          <hr className="w-[90%] border-slate-300 dark:border-white" />
        </div>
        <div className="flex flex-col space-y-2 text-3xl py-4 w-full">
          <Link href="/header">
            <ColoredButton content="Main Page" background="none" size="custom" icon="home" additionalStyles="text-4xl rounded-lg py-8" />
          </Link>
          <ColoredButton content="Search" background="none" size="custom" icon="search" additionalStyles="text-4xl rounded-lg py-8 " />
          <ColoredButton content="Notifications" background="none" size="custom" icon="notifications" additionalStyles="text-4xl rounded-lg py-8  " />
          <ColoredButton content="Messages" background="none" size="custom" icon="chat" additionalStyles="text-4xl rounded-lg py-8 " />
        </div>
      </div>
      <div className="mb-16 scale-[1.75] p-4 w-48 border-gray-400 dark:border-black border rounded-md hover:scale-[1.8] hover:cursor-pointer">
        <Link href="/users/1">
          <AuthorInfo authorName="Kamil" />{" "}
        </Link>
      </div>
    </div>
  );
}
