import Link from "next/link";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import {useState} from "react";
import {useUser} from "@/context/UserContext";

export function ActiveUserProfileLink() {
    const [isOpen, setIsOpen] = useState(false);
    const {logout, user} = useUser();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };


    function onLogout() {
        logout();
    }

    if(user !== null) return <div onMouseLeave={handleMouseLeave} className="mb-16 p-4 w-48 dark:hover:bg-gray-900 hover:bg-slate-300 rounded-xl hover:cursor-pointer">
        <div className="flex items-center">
            <Link href="/users/1" className="flex items-center flex-1">
                <ProfilePicture userName={user.name}/>
                <span className="px-1 flex-1 w-12 overflow-hidden">
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
                    <li className="p-1 dark:hover:bg-gray-700 hover:bg-slate-500">
                        <Link href="/users/edit">
                            <span>Edytuj profil</span>
                        </Link>
                    </li>
                    <li className="p-1 dark:hover:bg-gray-700 hover:bg-slate-500">
                        <button onClick={onLogout}>
                            <span>Wyloguj</span>
                        </button>
                    </li>
                </ul>
            </div>
        )}
    </div>;

    return <Link href="/login">
            <span className="px-1 flex-1 w-12 overflow-hidden">Zaloguj się</span>
        </Link>
};