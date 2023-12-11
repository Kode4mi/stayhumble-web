"use client"

import ProfileStat from "@/components/atoms/ProfileStat";
import FollowButton from "@/components/atoms/FollowButton";

const exampleData = [
    {
        name: "mikolaj",
        background: "",
        profile_picture: "",
        description: "Cipa cipa jestem cipa",
        posts: [1, 2, 3, 4],
        following: 12,
        followed: 35,
        humble_points: 2130,
        isFollowed: true,
        isFollowing: false
    },
    {
        name: "jacob",
        background: "",
        profile_picture: "",
        description: "lubie wachac stopy",
        posts: [],
        following: 3,
        followed: 160,
        humble_points: 50,
        isFollowed: false,
        isFollowing: true
    },
]

const UserPage = ({params}: {
    params: { slug: number }
}) => {
    if(!(params.slug == 1 || params.slug == 0)){
        return (
            <div className="w-full h-full flex-1 flex justify-center items-center">
                <h1>{"Nie znaleziono użytkownika"}</h1>
            </div>
        )
    }

    const posts = exampleData[params.slug].posts.map(() => <div className="w-full h-60 bg-gray-500 rounded-3xl mb-2"></div>)

    return (
        <div className="flex flex-col min-h-screen">
            <div className="border-b border-gray-700 pb-4">
                <div className="w-full dark:bg-gray-900 bg-gray-300 h-60 relative mb-12">
                    {"Tło użytkownika"}
                    <div className="h-40 w-40 border-2 dark:border-black border-white rounded-full dark:bg-gray-900 bg-gray-300 absolute top-1/2 left-4 flex justify-center items-center">{"Zdjęcie profilowe"}</div>
                </div>
                <div className="pl-2 flex">
                    <div className="flex-1">
                        <h1 className="font-bold tracking-wider">{exampleData[params.slug].name}</h1>
                        <p className="text-sm">{exampleData[params.slug].description}</p>
                        <div className="flex mt-1">
                            <ProfileStat statNumber={exampleData[params.slug].following} statTitle={"obserwujących"} />
                            <ProfileStat statNumber={exampleData[params.slug].followed} statTitle={"obserwowanych"} />
                            <ProfileStat statNumber={exampleData[params.slug].humble_points} statTitle={"punktów pokory"} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FollowButton userId={1} isFollowed={exampleData[params.slug].isFollowed}/>
                        {
                            exampleData[params.slug].isFollowing ? <p className="text-xs italic opacity-75">{"Obserwuje cię"}</p> : null
                        }
                    </div>
                </div>
            </div>
                {
                    posts.length ?
                        <div className="p-2">
                            {posts.map((post) => (
                                <div>
                                    {post}
                                </div>
                            ))}
                        </div>:
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