import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function AnimeCard({ anime }) {
    return (
        <Link to={`${anime.mal_id}`} className="block text-center relative cursor-pointer">
            <div>
                <img
                    src={anime?.images?.jpg?.image_url}
                    alt={anime?.title_english}
                    className="w-full h-[250px] object-cover"
                />
            </div>
            <h4 className="font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis">
                {anime?.title_english}
            </h4>
            <p className="">View: {anime?.members}</p>
            <span className="absolute top-1 left-1 flex bg-[#000000a6] text-[14px] gap-[2px] items-center text-[#f5ec42] w-[60px] px-[6px] py-[6px] rounded-[20px] font-bold">
                {anime.score} <AiFillStar />
            </span>
            <span
                className="absolute top-[6px] right-[6px] w-[40px] h-[40px]
             bg-[#b71c1ce6] rounded-[50%] flex items-center justify-center flex-wrap text-white font-semibold"
            >
                {anime.episodes}
            </span>
        </Link>
    );
}

export default AnimeCard;
