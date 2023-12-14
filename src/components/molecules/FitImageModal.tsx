"use client"

import React, {useCallback, useEffect, useState} from "react";

type FitImageModalProps = {
    imageProportions: ImageProportions,
    handleImageSelection: Function,
    closeModal: Function
}

export type ImageProportions = {
    x: number,
    y: number
}

export default function FitImageModal({imageProportions, handleImageSelection, closeModal}: FitImageModalProps) {
    const {x, y} = imageProportions;

    const [selectedImageName, setSelectedImageName] = useState<string>("")
    const [selectedImageURL, setSelectedImageURL] = useState<string>("")
    const [imageZoom, setImageZoom] = useState<string>("100")
    const [imageX, setImageX] = useState<string>("0")
    const [imageY, setImageY] = useState<string>("0")
    const [imageWidth, setImageWidth] = useState<number>(100)
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null) return;

        setSelectedImageName(e.target.value)
        const selectedFile = e.target.files[0];
        setSelectedImageURL(URL.createObjectURL(selectedFile));
    }

    const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const image = document.querySelector('#image');
        const container = document.querySelector('#container');
        let width = 100
        if(image && container)
            width = (image.clientWidth / container.clientWidth)*100
        setImageWidth(width)
        if(e.target.value === null) return
        setImageZoom(e.target.value)
    }

    const onCloseButtonClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        closeModal();
    }, []);

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 border shadow-lg rounded-md dark:bg-gray-800 flex flex-col">
                <div className="border-2 border-black overflow-hidden relative" id="container" style={{height: `${y * 5}rem`, width: `${x * 5}rem`}}>
                    {
                        selectedImageURL ?
                            <img src={selectedImageURL}
                                 alt="Wybierz inny plik"
                                 id="image"
                                 style={{
                                     height: `${imageZoom}%`,
                                     position: 'absolute',
                                     top: `${-Number(imageY)}%`,
                                     left: `${-Number(imageX)}%`,
                                     maxWidth: "none"
                                 }}/> :
                            <h1>{"Wybierz obraz"}</h1>
                    }
                </div>
                <input type="range" value={imageX} onChange={e => setImageX(e.target.value)} min={0} max={imageWidth-100}/>
                <input type="range" value={imageY} onChange={e => setImageY(e.target.value)} min={0} max={Number(imageZoom)-100}/>
                <input type="range" value={imageZoom} onChange={e => handleZoomChange(e)} min={100} max={300}/>
                <input type="file" value={selectedImageName} onChange={handleFileSelect}/>
                <div className="flex justify-center mt-4">
                    <button onClick={onCloseButtonClick} className="text-black border-black border-2">Zamknij</button>
                </div>
            </div>
        </div>
    );
}
