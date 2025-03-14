"use client"

import ProfilePicture from "@/components/atoms/ProfilePicture";
import React, { useState} from "react";
import Image from "next/image";
import FitImageModal, {ImageProportions} from "@/components/molecules/FitImageModal";
import {useUser} from "@/context/UserContext";
import {log} from "node:util";

export default function EditUserPage() {
    const {user} = useUser();

    const [profilePicture, setProfilePicture] = useState<string | undefined>(user?.profilePicture)
    const [background, setBackground] = useState<string | undefined>(user?.backgroundPicture)
    const [username, setUsername] = useState<string | undefined>(user?.name)
    const [showModal, setShowModal] = useState<Boolean>(false)
    const [proportions, setProportions] = useState<ImageProportions>({x: 0, y: 0})
    const [imageSelectionHandler, setImageSelectionHandler] = useState<Function>(() => () => {})

    const handleProfilePictureSelect  = () => {
        setImageSelectionHandler( () => (imageURL: any) => setProfilePicture(imageURL));
        setProportions({x: 5, y: 5});
        setShowModal(true);
    }

    function handleBackgroundSelect() {
        setImageSelectionHandler(() => (imageURL: any) => setBackground(imageURL));
        setProportions({x: 11, y: 5});
        setShowModal(true);
    }

    function changeUsername() {
        console.log(username)
    }

    if(user) return (
        <div>
            <div className="w-full dark:bg-gray-800 bg-gray-300 h-60 relative mb-12">
                {/*Background picture*/}
                <div className="w-full h-full overflow-hidden flex justify-center items-center">
                    {
                        background ?
                            <Image src={background} alt="background picture" fill style={{objectFit: 'cover'}}/> :
                            <h1>{`welcome to ${user.name}'s profile`}</h1>
                    }
                </div>
                {/*Profile picture*/}
                <div className="h-40 w-40 border-2 dark:border-black border-white rounded-full dark:bg-gray-900 bg-gray-300 absolute top-1/2 left-4 flex justify-center items-center overflow-hidden">
                    {
                        profilePicture ?
                            <Image src={profilePicture} alt="profile picture" fill/> :
                            <span className="text-7xl">{user.name ? user.name[0].toUpperCase() : ""}</span>
                    }
                </div>
                <button onClick={handleBackgroundSelect} className="absolute right-2 -translate-y-1/2 py-2 px-6 rounded-full bg-orange-500">
                    {"Wybierz zdjęcie w tle"}
                </button>
            </div>
            <div className="flex space-x-2">
                <input type="text" value={username || user.name} onChange={e => setUsername(e.target.value)} id="usernameEdit" className="font-bold tracking-wider dark:bg-gray-950 outline-0 p-2 rounded-xl"/>
                <button onClick={changeUsername} className="py-2 px-6 rounded-full border-2 border-orange-500 bg-none text-orange-500">Zmień nazwę konta</button>
            </div>
            <div className="pt-2 pb-6">
                <textarea className="text-sm w-full resize-none h-48 dark:bg-gray-950 rounded-xl outline-0 p-2" defaultValue={user.description}></textarea>
                <button onClick={() => console.log("description update")} className="py-2 px-6 rounded-full border-2 border-orange-500 bg-none text-orange-500">Zaktualizuj swój opis</button>
            </div>
            <h3 className="w-full text-center pt-2 border-gray-700 border-t">Tak będzie wyglądało twoje zdjęcie na stronie stayHumble</h3>
            <div className="flex items-end flex-wrap justify-between">
                <ProfilePicture userName={user.name} imageURL={profilePicture} scale={4}/>
                <ProfilePicture userName={user.name} imageURL={profilePicture} scale={3}/>
                <ProfilePicture userName={user.name} imageURL={profilePicture} scale={2}/>
                <ProfilePicture userName={user.name} imageURL={profilePicture}/>
                <button onClick={handleProfilePictureSelect} className="py-2 px-6 rounded-full bg-orange-500">{"Wybierz zdjęcie profilowe"}</button>
            </div>
            {showModal && <FitImageModal imageProportions={proportions} handleImageSelection={imageSelectionHandler} closeModal={() => setShowModal(false)}/>}
        </div>
    );

    return (
        <div className="flex justify-center items-center h-screen">
            <span>Zaloguj się by edytować profil</span>
        </div>
    );

}
