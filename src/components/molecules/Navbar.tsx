"use client";
import ColoredButton from "../atoms/commons/ColoredButton";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center bg-slate-200 dark:bg-[#090d15] p-4 h-full">
      <h1 className="text-[4rem] font-bold pt-6 pb-8 text-center transition-all hover:cursor-default hover:scale-105">
        <span className="text-black dark:text-white">stay</span>
        <span className="text-orange-500">Humble</span>
      </h1>
      <hr className="w-[90%] pb-4 border-slate-300 dark:border-white " />
      <div className="flex flex-col items-center space-y-2 text-3xl">
        <div className="flex items-center space-x-2">
          <ColoredButton content="Main Page" background="none" size="custom" icon="home" additionalStyles="text-4xl rounded-lg py-8" />
        </div>
        <ColoredButton content="Search" background="none" size="custom" icon="search" additionalStyles="text-4xl rounded-lg py-8" />
        <ColoredButton content="Notifications" background="none" size="custom" icon="notifications" additionalStyles="text-4xl rounded-lg py-8" />
        <ColoredButton content="Messages" background="none" size="custom" icon="chat" additionalStyles="text-4xl rounded-lg py-8" />
      </div>
    </div>
  );
}
