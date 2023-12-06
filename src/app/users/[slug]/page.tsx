"use client"

import ProfileStat from "@/components/atoms/ProfileStat";

const UserPage = ({params}: {
    params: { slug: string }
}) => {

    return (
        <div className="flex flex-col min-h-full">
            <div className="w-full bg-green-500 h-60 relative mb-12">
                {"Tło użytkownika"}
                <div className="h-40 w-40 rounded-full bg-amber-400 absolute top-1/2 left-4 flex justify-center items-center">{"Zdjęcie profilowe"}</div>
            </div>
            <div className="pl-2">
                <h1 className="font-bold tracking-wider">{params.slug}</h1>
                <p>Opis profilu lorem ipsum chuj chuj chuj</p>
                <div className="flex mt-1">
                    <ProfileStat statNumber={21} statTitle={"obserwujących"} />
                    <ProfileStat statNumber={37} statTitle={"obserwowanych"} />
                    <ProfileStat statNumber={4744} statTitle={"punktów pokory"} />
                </div>
            </div>
        </div>
    );
};

export default UserPage;