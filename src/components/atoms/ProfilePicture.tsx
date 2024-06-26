/**Profile picture component
 * @param {string} imageURL - URL of the image
 * @param {string} userName - If there is no image, the first letter of the username will be displayed
 * @param {number} scale - The scale of the component (default 1)*/
export default function ProfilePicture({imageURL, userName, scale}: { imageURL?: string, userName?: string, scale?: number }) {
    scale = scale ? scale : 1;
    return (
        <div style={{height: `${scale*2.5}rem`, width: `${scale*2.5}rem`}} className={`border-2 dark:border-black border-white rounded-full dark:bg-gray-900 bg-gray-300 flex justify-center items-center overflow-hidden`}>
            {
                imageURL ?
                    <img src={imageURL} alt="profile picture" className="h-full w-full"/> :
                    <span style={{fontSize: `${scale * 1.125}rem`}}>{userName ? userName[0].toUpperCase() : ""}</span>
            }
        </div>
    );
}
