"use client";
import React, { useState } from "react";

interface Props {
    mal_id: number;
    user_email: string;
    anime_title: string;
    images: string;
}
const CollectionButton = ({mal_id, user_email, anime_title, images}: Props) => {
    const [isCreated, setIsCreated] = useState(false);
    
    const handleCollection = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const data = {mal_id, user_email, anime_title, images};
        const res = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data),
        })
        const collection = await res.json();
        if (collection.status === 200) {
            setIsCreated(true);
            return;
        }
        return
    }

    return (
        <div>
            <p>{isCreated ? <button onClick={handleCollection} className="transition-all bg-blue-800 md:p-3 md:px-4 md:text-2xl text-lg p-2 px-3 text-black rounded-3xl mr-3">
                Added to Collection
            </button> : <button onClick={handleCollection} className="transition-all hover:bg-blue-800 hover:text-white bg-blue-400 md:p-3 md:px-4 md:text-2xl text-lg p-2 px-3 text-black rounded-3xl mr-3">
                Add to Collection
            </button>}</p>
            
        </div>
    );
};
export default CollectionButton;
