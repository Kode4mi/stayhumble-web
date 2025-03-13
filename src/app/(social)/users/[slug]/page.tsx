"use client"

import ProfileStat from "@/components/atoms/ProfileStat";
import FollowButton from "@/components/atoms/FollowButton";
import Image from "next/image";
import {useParams} from "next/navigation";

const exampleData = [
    {
        name: "Mikolaj",
        background: "",
        profile_picture: "",
        description: "",
        posts: [1, 2, 3, 4],
        following: 12,
        followed: 35,
        humble_points: 2130,
        isFollowed: true,
        isFollowing: false
    },
    {
        name: "Wietnamczyk",
        background: "https://pbs.twimg.com/profile_banners/3092380451/1507906844/1500x500",
        profile_picture: "https://pbs.twimg.com/profile_images/1699087758231265280/LeLYlUkH_400x400.jpg",
        description: "lubie warzywa",
        posts: [],
        following: 3,
        followed: 160,
        humble_points: 50,
        isFollowed: false,
        isFollowing: true
    },
]

const UserPage = () => {
		const slug: number = Number(useParams<{slug: string}>().slug)

    if (!(slug === 1 || slug === 0 || Number.isNaN(slug))) {
        return (
            // USER_NOT_FOUND message
            <div className="w-full h-full flex-1 flex justify-center items-center">
                <h1>{"Nie znaleziono użytkownika"}</h1>
            </div>
        )
    }

    const posts = exampleData[slug].posts.map((_, index) => <div key={index} className="w-full h-60 bg-gray-500 rounded-3xl mb-2"></div>)

    return (
        // User page
        <div className="flex flex-col min-h-screen min-w-[740px]">
            {/*Profile bar*/}
            <div className="border-b border-gray-700 pb-4">
                {/*Profile and background container*/}
                <div className="w-full dark:bg-gray-800 bg-gray-300 h-60 relative mb-12">
                    {/*Background picture*/}
                    <div className="w-full h-full overflow-hidden flex justify-center items-center">
                        {
                            exampleData[slug].background ?
                                <Image src={exampleData[slug].background} alt="background picture" fill/> :
                                <h1>{`welcome to ${exampleData[slug].name}'s profile`}</h1>
                        }
                    </div>
                    {/*Profile picture*/}
                    <div className="h-40 w-40 border-2 dark:border-black border-white rounded-full dark:bg-gray-900 bg-gray-300 absolute top-1/2 left-4 flex justify-center items-center overflow-hidden">
                        {
                            exampleData[slug].profile_picture ?
                                <Image src={exampleData[slug].profile_picture} alt="profile picture" fill/> :
                                <span className="text-7xl">{exampleData[slug].name[0].toUpperCase()}</span>
                        }
                    </div>
                </div>
                {/*User info container*/}
                <div className="pl-2 flex">
                    {/*Username, description and stats*/}
                    <div className="flex-1">
                        <h1 className="font-bold tracking-wider">{exampleData[slug].name}</h1>
                        <p className="text-sm">{exampleData[slug].description}</p>
                        <div className="flex mt-1">
                            <ProfileStat statNumber={exampleData[slug].following} statTitle={"obserwujących"}/>
                            <ProfileStat statNumber={exampleData[slug].followed} statTitle={"obserwowanych"}/>
                            <ProfileStat statNumber={exampleData[slug].humble_points} statTitle={"punktów pokory"}/>
                        </div>
                    </div>
                    {/*Action buttons*/}
                    <div className="flex flex-col justify-center items-center">
                        <FollowButton userId={1} isFollowed={exampleData[slug].isFollowed}/>
                        {
                            exampleData[slug].isFollowing ? <p className="text-xs italic opacity-75">{"Obserwuje cię"}</p> : null
                        }
                    </div>
                </div>
            </div>
            {/*User's post section*/}
            {
                posts.length ?
                    <div className="p-2">
                        {posts.map((post, index) => (
                            <div key={index}>
                                {post}
                            </div>
                        ))}
                    </div> :
                    (
                        <div className="w-full h-full flex-1 flex justify-center items-center">
                            <h1>{"Nie znaleziono wpisów"}</h1>
                        </div>
                    )
            }
        </div>
    );
};

export default UserPage;