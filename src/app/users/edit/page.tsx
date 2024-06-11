"use client"

import ProfilePicture from "@/components/atoms/ProfilePicture";
import React, { useState} from "react";
import FitImageModal, {ImageProportions} from "@/components/molecules/FitImageModal";
import {useUser} from "@/context/UserContext";

export default function EditUserPage() {
    const {user} = useUser();

    const [profilePicture, setProfilePicture] = useState<string | undefined>(user?.profilePicture)
    const [background, setBackground] = useState<string | undefined>(user?.backgroundPicture)
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

    if(user) return (
        <div className="border-b border-gray-700 pb-4">
            <div className="w-full h-60 flex justify-center items-center dark:bg-gray-900 bg-gray-300 relative mb-12">
                {
                    background ?
                        <img src={background} alt="background picture"/> :
                        <h1>{`welcome to ${user.name}'s profile`}</h1>
                }
            </div>
            <button onClick={handleBackgroundSelect}>{"Wybierz zdjęcie w tle"}</button>
            <div className="flex items-end justify-between mb-12">
                <ProfilePicture userName={"Kubuś"} imageURL={profilePicture} scale={4}/>
                <ProfilePicture userName={"Kubuś"} imageURL={profilePicture} scale={3}/>
                <ProfilePicture userName={"Kubuś"} imageURL={profilePicture} scale={2}/>
                <ProfilePicture userName={"Kubuś"} imageURL={profilePicture}/>
                <button onClick={handleProfilePictureSelect}>{"Wybierz zdjęcie profilowe"}</button>
            </div>
            <div className="pl-2 flex">
                <input type="text" defaultValue={user.name} className="font-bold tracking-wider dark:bg-black"/>
                <textarea className="text-sm dark:bg-black" defaultValue={user.description}></textarea>
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
