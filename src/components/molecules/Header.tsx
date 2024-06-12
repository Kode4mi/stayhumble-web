"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-between dark:bg-gray-900 text-xl pb-4 text-orange-500">
            <Link href="/home" className="text-black text-center font-bold relative px-4 py-7 w-1/2 dark:text-white dark:border-white">
                <span className={pathname === "/home" ? "text-orange-500": ""}>Dla Ciebie</span>
            </Link>
            <Link href="/home/following" className="text-black text-center font-bold relative px-4 py-7 w-1/2 dark:text-white dark:border-white ml-2">
                <span className={pathname === "/home/following" ? "text-orange-500": ""}>Obserwujesz</span>
            </Link>
        </div>
    );
}
