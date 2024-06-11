import Link from "next/link";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import {useEffect, useRef, useState} from "react";
import {useUser} from "@/context/UserContext";

export function ActiveUserProfileLink() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const {logout, user} = useUser();

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

    function onLogout() {
        logout();
    }

    if(user !== null) return <div ref={dropdownRef}>
        <div className="flex items-center">
            <Link href="/users/1" className="flex items-center flex-1">
                <ProfilePicture userName={user.name}/>
                <span className="px-1 flex-1">
                    {user.name}
                </span>
            </Link>
            <button className="material-symbols-outlined rounded-full dark:hover:bg-gray-700 hover:bg-slate-400" onClick={handleToggle}>
                arrow_drop_down
            </button>
        </div>
        {isOpen && (
            <div className="flex absolute z-10 bg-slate-400 dark:bg-gray-800 dark:text-white p-2 rounded-xl translate-x-[100%]">
                <ul>
                    <li className="p-1">
                        <Link href="/users/edit">
                            <span>Edytuj profil</span>
                        </Link>
                    </li>
                    <li className="p-1">
                        <button onClick={onLogout}>
                            <span>Wyloguj</span>
                        </button>
                    </li>
                </ul>
            </div>
        )}
    </div>;

    return <Link href="/login">
        <span>Zaloguj się</span>
    </Link>
};