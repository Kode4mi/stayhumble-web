export default function ProfilePicture({imageURL, userName, scale}: { imageURL?: string, userName?: string, scale?: number }) {
    const profilePictureSize = `h-[${scale ? (scale * 2.5).toString() : "2.5"}rem] w-[${scale ? (scale * 2.5).toString() : "2.5"}rem]`
    const defaultProfileLetterSize = `text-[${scale ? (scale * 1.125).toString() : "1.125"}rem]`
    return (
        <div className={`${profilePictureSize} border-2 dark:border-black border-white rounded-full dark:bg-gray-900 bg-gray-300 flex justify-center items-center overflow-hidden`}>
            {
                imageURL ?
                    <img src={imageURL} alt="profile picture" className="h-full w-full"/> :
                    <span className={defaultProfileLetterSize}>{userName ? userName[0].toUpperCase() : ""}</span>
            }
        </div>
    );
}
