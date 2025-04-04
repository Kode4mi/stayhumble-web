"use client"
import React from "react";
import ColoredButton from "@/components/atoms/commons/ColoredButton";
import Image from "next/image";
import {cancelImageSelect, handleImageSelect} from "@/utils/FileHandlers";

export function AddNewPost() {
    const [ selectedImageName, setSelectedImageName ] = React.useState<string>('')
    const [ selectedImageURL, setSelectedImageURL ] = React.useState<string | undefined>(undefined)

    function sendPost() {
        console.log('Post sent')
    }

    return (
        <div className="dark:bg-gray-950 bg-slate-400 w-full min-h-48 rounded-xl px-6 py-4">
            <textarea placeholder="Napisz co się stało..." className="bg-transparent w-full outline-0 resize-none h-28 placeholder-gray-950 dark:placeholder-gray-400"/>
            {selectedImageURL &&
                <div className="w-20 h-20 rounded-2xl overflow-hidden relative mx-2 mb-2 cursor-pointer" onClick={() => cancelImageSelect(setSelectedImageName, setSelectedImageURL)}>
                        <span className="absolute text-8xl leading-[5rem] text-center w-20 bg-opacity-50 bg-black">
                            &times;
                        </span>
                    <Image src={selectedImageURL} alt="selected image" fill style={{objectFit: 'cover'}}/>
                </div>
            }
            <div className="flex justify-between">
                <label htmlFor="imageInput" className="w-16 h-16 leading-14 flex justify-center items-center">
                    <span className="material-symbols-outlined">
                        add_photo_alternate
                    </span>
                </label>
                <input type="file" id="imageInput" value={selectedImageName} onChange={(e) => handleImageSelect(e, setSelectedImageName, setSelectedImageURL)} className="hidden"/>
                <ColoredButton onClick={sendPost} content={"Send post"}/>
            </div>
        </div>
    );
}