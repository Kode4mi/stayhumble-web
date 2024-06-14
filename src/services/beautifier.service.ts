import {Dispatch, SetStateAction} from "react";
import {Star} from "@/models/star.model";

export class BeautifierService {
    generateStars = (setStarsState: Dispatch<SetStateAction<Star[]>>) => {
        const newStars: Star[] = [];
        for (let i = 0; i < 200; i++) {
            newStars.push({
                top: Math.random() * 100 + "vh",
                left: Math.random() * 100 + "vw",
                animationDuration: Math.random() * 2 + 1 + "s",
            });
        }
        setStarsState(newStars);
    };
}