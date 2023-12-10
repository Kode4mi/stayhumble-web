import {useState} from "react";

export default function FollowButton({userId, isFollowed} : {userId: number, isFollowed: boolean}) {
    const [isClicked, setIsClicked] = useState<boolean>(isFollowed)
    if (isClicked) return (
        <button onClick={() => setIsClicked(!isClicked)} className="border-2 border-orange-500 text-orange-500 p-2 rounded-3xl">{"Przestań obserwować"}</button>
    );

    return (
        <button onClick={() => setIsClicked(!isClicked)} className="bg-orange-500 text-white p-2 rounded-3xl">{"Zaobserwuj"}</button>
    )
}
