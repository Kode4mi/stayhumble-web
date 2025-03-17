import Image from "next/image";

type ProfilePictureProps = {
		imageURL?: string;
		userName?: string;
		scale?: number;
}

/**Profile picture component
 * @param {string} imageURL - URL of the image
 * @param {string} userName - If there is no image, the first letter of the username will be displayed
 * @param {number} scale - The scale of the component (default 1)*/
export default function ProfilePicture({imageURL, userName, scale}: ProfilePictureProps) {
    scale = scale ? scale : 1;
    return (
        <div style={{height: `${scale*2.5}rem`, width: `${scale*2.5}rem`}} className={`text-black dark:text-white border-2 dark:border-black border-white rounded-full dark:bg-gray-900 bg-gray-300 flex justify-center items-center overflow-hidden`}>
            {
                imageURL ?
                    <Image src={imageURL} alt="profile picture" fill/> :
                    <span style={{fontSize: `${scale * 1.125}rem`}}>{userName ? userName[0].toUpperCase() : ""}</span>
            }
        </div>
    );
}
