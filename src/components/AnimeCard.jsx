import React from 'react';

function AnimeCard({ anime }) {
    console.log(anime?.jpg?.images?.image_url);
    return (
        <div className="text-center">
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
        </div>
    );
}

export default AnimeCard;
