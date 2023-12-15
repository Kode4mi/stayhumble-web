"use client"

import React, {useCallback, useEffect, useState} from "react";
import * as sharp from 'sharp';
import {exec} from "child_process";

type FitImageModalProps = {
    imageProportions: ImageProportions,
    handleImageSelection: Function,
    closeModal: Function
}

export type ImageProportions = {
    x: number,
    y: number
}

type ImageSize = {
    height: number,
    width: number
}

export default function FitImageModal({imageProportions, handleImageSelection, closeModal}: FitImageModalProps) {
    const {x, y} = imageProportions;

    const [selectedImageName, setSelectedImageName] = useState<string>("")
    const [selectedImageURL, setSelectedImageURL] = useState<string>("")
    const [imageZoom, setImageZoom] = useState<string>("100")
    const [imageX, setImageX] = useState<string>("0")
    const [imageY, setImageY] = useState<string>("0")
    const [imageSize, setImageSize] = useState<ImageSize>({height: 100, width: 100})
    const [isTooTall, setIsTooTall] = useState<boolean>(false)
    const [isTooWide, setIsTooWide] = useState<boolean>(false)

    useEffect(() => {
        handleImageResize()
        if (Number(imageX) > imageSize.width - 100) setImageX((imageSize.width - 100).toString())
        if (Number(imageY) > imageSize.height - 100) setImageY((imageSize.height - 100).toString())
    }, [imageZoom])

    useEffect(() => {
        handleImageResize();
    },[isTooTall, isTooWide])

    const handleImageResize = () => {
        const image = document.querySelector('#image');
        const container = document.querySelector('#container');
        let width = 100;
        let height = 100;
        if (image && container) {
            width = (image.clientWidth / container.clientWidth) * 100;
            height = (image.clientHeight / container.clientHeight) * 100;
        }
        setImageSize({height, width})
    }

    const handleImageLoad = () => {
        const image = document.querySelector('#image');
        const container = document.querySelector('#container');
        if (image && container) {
            if((image.clientHeight > container.clientHeight) && (image.clientWidth > container.clientWidth)){
                if(image.clientWidth >= image.clientHeight) {
                    return x <= y ? setIsTooTall(true) : setIsTooWide(true)
                } else if(image.clientWidth < image.clientHeight){
                    return x > y ? setIsTooWide(true) : setIsTooTall(true)
                }
            }
        }

        handleImageResize()
    }

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null) return;

        setSelectedImageName(e.target.value)
        const selectedFile = e.target.files[0];
        setSelectedImageURL(URL.createObjectURL(selectedFile));
    }

    const submitImage = async () => {
        handleImageSelection(selectedImageURL)
        closeModal();
    }

    const onCloseButtonClick = () => {
        closeModal();
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 border shadow-lg rounded-md dark:bg-gray-800 flex flex-col relative">
                <div className="border-2 border-black overflow-hidden relative" id="container" style={{height: `${y * 5}rem`, width: `${x * 5}rem`}}>
                    {
                        selectedImageURL ?
                            <img src={selectedImageURL}
                                 alt="Wybierz inny plik"
                                 id="image"
                                 onLoad={handleImageLoad}
                                 style={{
                                     height: isTooTall ? "100%" : "auto",
                                     width: isTooWide ? "100%": "auto",
                                     minHeight: `${imageZoom}%`,
                                     minWidth: `${imageZoom}%`,
                                     position: 'absolute',
                                     top: `${-Number(imageY)}%`,
                                     left: `${-Number(imageX)}%`,
                                     maxWidth: "none"
                                 }}/> :
                            <h1>{"Wybierz obraz"}</h1>
                    }
                </div>
                <input type="range" value={imageY} onChange={e => setImageY(e.target.value)} step={0.1} min={0} max={imageSize.height - 100} className="rotate-90 absolute top-1/2 right-5 translate-x-1/2 translate-y-[-350%]" style={{width: `${y * 5}rem`}} />
                <input type="range" value={imageX} onChange={e => setImageX(e.target.value)} step={0.1} min={0} max={imageSize.width - 100}/>
                <input type="range" value={imageZoom} onChange={e => setImageZoom(e.target.value)} min={100} max={300}/>
                <input type="file" value={selectedImageName} onChange={handleFileSelect}/>
                <div className="flex justify-center mt-4">
                    <button onClick={submitImage} className="text-black border-black border-2">Ustaw zdjęcie</button>
                    <button onClick={onCloseButtonClick} className="text-black border-black border-2">Zamknij</button>
                </div>
            </div>
        </div>
    );
}
