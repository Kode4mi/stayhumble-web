"use client";
import Link from "next/link";
import ColoredButton from "../atoms/commons/ColoredButton";
import {ActiveUserProfileLink} from "@/components/molecules/ActiveUserProfileLink";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center justify-between bg-slate-200 dark:bg-[#090d15] py-12 px-14 h-full  ">
      <div>
        <Link href="/home">
          <h1 className=" text-4xl font-bold pt-6 pb-8 text-center transition-all">
            <span className="text-black dark:text-white">stay</span>
            <span className="text-orange-500">Humble</span>
          </h1>
        </Link>
        <div className="flex justify-center w-full">
          <hr className="w-[90%] border-slate-300 dark:border-white" />
        </div>
        <div className="flex flex-col space-y-2 text-3xl py-4 w-full">
            <Link href="/home">
              <ColoredButton content="Main Page" backgroundOption="none" size="custom" icon="home" additionalStyles="text-xl rounded-lg py-4 w-full"/>
            </Link>
            <Link href="/search">
                <ColoredButton content="Search" backgroundOption="none" size="custom" icon="search" additionalStyles="text-xl rounded-lg py-4 w-full"/>
            </Link>
            <ColoredButton content="Notifications" backgroundOption="none" size="custom" icon="notifications" additionalStyles="text-xl rounded-lg py-4 w-full"/>
          </div>
        </div>
          <ActiveUserProfileLink/>
      </div>
  );
}
