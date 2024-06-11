import Link from "next/link";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import {useEffect, useRef, useState} from "react";

export function ActiveUserProfileLink() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <div ref={dropdownRef}>
        <div className="flex items-center">
            <Link href="/users/1" className="flex items-center flex-1">
                <ProfilePicture userName={"Username"}/>
                <span className="px-1 flex-1">
                    {"Username"}
                </span>
            </Link>
            <button className="material-symbols-outlined rounded-full dark:hover:bg-gray-700 hover:bg-slate-400" onClick={handleToggle} >
                arrow_drop_down
            </button>
        </div>
        {isOpen && (
            <div className="absolute z-10 bg-slate-400 dark:bg-gray-800 dark:text-white p-2 rounded-xl translate-x-[100%]">
                <Link href="/users/edit">
                    <span>Edytuj profil</span>
                </Link>
            </div>
        )}
    </div>;
};