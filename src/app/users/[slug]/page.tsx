"use client"

import ProfileStat from "@/components/atoms/ProfileStat";
import FollowButton from "@/components/atoms/FollowButton";

const exampleData = [1, 2, 3, 4]

const UserPage = ({params}: {
    params: { slug: string }
}) => {
    const posts = exampleData.map(post => <div className="w-full h-60 bg-gray-500 rounded-3xl mb-2"></div>)
    return (
        <div className="flex flex-col min-h-full">
            <div className="border-b border-gray-700 pb-4">
                <div className="w-full bg-green-500 h-60 relative mb-12">
                    {"Tło użytkownika"}
                    <div className="h-40 w-40 rounded-full bg-amber-400 absolute top-1/2 left-4 flex justify-center items-center">{"Zdjęcie profilowe"}</div>
                </div>
                <div className="pl-2 flex">
                    <div className="flex-1">
                        <h1 className="font-bold tracking-wider">{params.slug}</h1>
                        <p className="text-sm">Opis profilu lorem ipsum chuj chuj chuj</p>
                        <div className="flex mt-1">
                            <ProfileStat statNumber={21} statTitle={"obserwujących"} />
                            <ProfileStat statNumber={37} statTitle={"obserwowanych"} />
                            <ProfileStat statNumber={4744} statTitle={"punktów pokory"} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <FollowButton userId={1} isFollowed={false}/>
                    </div>
                </div>
            </div>
            <div className="p-2">
                {posts}
            </div>
        </div>
    );
};

export default UserPage;