"use client"

import ProfileStat from "@/components/atoms/ProfileStat";
import FollowButton from "@/components/atoms/FollowButton";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import React, {useEffect, useState} from "react";

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
    const [uploadedImage, setUploadedImage] = useState<string>("")

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null ) return;

        setUploadedImage(e.target.value)
        const selectedFile = e.target.files[0];
        setProfilePicture(URL.createObjectURL(selectedFile));
    }

    return (
        <div className="border-b border-gray-700 pb-4">
            <div className="w-full h-60 flex justify-center items-center dark:bg-gray-900 bg-gray-300 relative mb-12">
                {
                    exampleData[0].background ?
                        <img src={exampleData[0].background} alt="background picture"/> :
                        <h1>{`welcome to ${exampleData[0].name}'s profile`}</h1>
                }
            </div>
            <div className="flex items-end justify-between mb-12">
                <ProfilePicture userName={"Kubuś"} imageURL={profilePicture} scale={4}/>
                <ProfilePicture userName={"Kubuś"} imageURL={profilePicture} scale={3}/>
                <ProfilePicture userName={"Kubuś"} imageURL={profilePicture} scale={2}/>
                <ProfilePicture userName={"Kubuś"} imageURL={profilePicture}/>
                <input type="file" value={uploadedImage} onChange={handleFileSelect}/>
            </div>
            <div className="pl-2 flex">
                <input type="text" value={exampleData[0].name} className="font-bold tracking-wider dark:bg-black"/>
                <textarea className="text-sm dark:bg-black">{exampleData[0].description}</textarea>
            </div>
        </div>
    );
}
