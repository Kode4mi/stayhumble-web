import {useState} from "react";

export default function FollowButton({userId, isFollowed} : {userId: number, isFollowed: boolean}) {
    const [isClicked, setIsClicked] = useState<boolean>(isFollowed)
    if (isClicked) return (
        <button onClick={() => setIsClicked(!isClicked)} className="border-2 border-orange-500 text-orange-500 py-2 px-4 rounded-3xl">{"Przestań obserwować"}</button>
    );

    return (
        <button onClick={() => setIsClicked(!isClicked)} className="bg-orange-500 text-white py-2 px-4 rounded-3xl">{"Zaobserwuj"}</button>
    )
}
