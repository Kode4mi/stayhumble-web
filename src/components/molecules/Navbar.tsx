"use client";
import Link from "next/link";
import ColoredButton from "../atoms/commons/ColoredButton";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import {ActiveUserProfileLink} from "@/components/molecules/ActiveUserProfileLink";

export default function Navbar() {
  return (
      <div className="flex flex-col items-center justify-between bg-slate-200 dark:bg-[#090d15] p-4 h-full">
        <div>
          <Link href="/home">
            <h1 className=" text-4xl font-bold pt-6 pb-8 text-center transition-all">
              <span className="text-black dark:text-white">stay</span>
              <span className="text-orange-500">Humble</span>
            </h1>
          </Link>
          <div className="flex justify-center w-full">
            <hr className="w-[90%] border-slate-300 dark:border-white"/>
          </div>
          <div className="flex flex-col space-y-2 text-3xl py-4 w-full">
            <Link href="/home">
              <ColoredButton content="Main Page" background="none" size="custom" icon="home" additionalStyles="text-xl rounded-lg py-4 w-full"/>
            </Link>
            <ColoredButton content="Search" background="none" size="custom" icon="search" additionalStyles="text-xl rounded-lg py-4 w-full"/>
            <ColoredButton content="Notifications" background="none" size="custom" icon="notifications" additionalStyles="text-xl rounded-lg py-4 w-full"/>
          </div>
        </div>
        <div className="mb-16 p-4 w-48 dark:hover:bg-gray-900 hover:bg-slate-300 rounded-xl hover:cursor-pointer">
          <ActiveUserProfileLink/>
        </div>
      </div>
  );
}
