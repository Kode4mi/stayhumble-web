"use client"

import ProfilePicture from "@/components/atoms/ProfilePicture";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import FitImageModal, {ImageProportions} from "@/components/molecules/FitImageModal";

const exampleData = [
    {
        name: "Wietnamczyk",
        background: "", //https://pbs.twimg.com/profile_banners/3092380451/1507906844/1500x500",
        profile_picture: "https://pbs.twimg.com/profile_images/1699087758231265280/LeLYlUkH_400x400.jpg",
        description: "lubie wachac stopy",
        posts: [],
        following: 3,
        followed: 160,
        humble_points: 50,
        isFollowed: false,
        isFollowing: true
    }
]

export default function EditUserPage() {
    const [profilePicture, setProfilePicture] = useState<string>(exampleData[0].profile_picture)
    const [background, setBackground] = useState<string>(exampleData[0].background)
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

    return (
        <div className="border-b border-gray-700 pb-4">
            <div className="w-full h-60 flex justify-center items-center dark:bg-gray-900 bg-gray-300 relative mb-12">
                {
                    background ?
                        <img src={background} alt="background picture"/> :
                        <h1>{`welcome to ${exampleData[0].name}'s profile`}</h1>
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
                <input type="text" defaultValue={exampleData[0].name} className="font-bold tracking-wider dark:bg-black"/>
                <textarea className="text-sm dark:bg-black" defaultValue={exampleData[0].description}></textarea>
            </div>
            {showModal && <FitImageModal imageProportions={proportions} handleImageSelection={imageSelectionHandler} closeModal={() => setShowModal(false)}/>}
        </div>
    );
}
