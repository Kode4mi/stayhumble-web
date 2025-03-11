"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PhoneNavbar() {
  const path = usePathname();
  console.log(path);

  return (
    <div className="flex justify-around ">
      <button className="flex flex-col items-center">
        <span className={`material-symbols-outlined  ${path === '/home' ? 'text-orange-600' : ''} `}>home</span>
        <Link href="/home">
          <span>Dom</span>
        </Link>
      </button>
      <button className="flex flex-col items-center">
        <span className={`material-symbols-outlined  ${path === '/search' ? 'text-orange-600' : ''} `}>search</span>
        <span>Szukaj</span>
      </button>
      <button className="flex flex-col items-center">
        <span className={`material-symbols-outlined  ${path === '/notifications' ? 'text-orange-600' : ''} `}>notifications</span>
        <Link href="/home">
          <span>Powiadomienia</span>
        </Link>
      </button>
      <button className="flex flex-col items-center">
        <span className={`material-symbols-outlined  ${path.includes('/users') ? 'text-orange-600' : ''} `}>person</span>
        <Link href="/users/1">
          <span>Profil</span>
        </Link>
      </button>
    </div>
  );
}
