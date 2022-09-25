import React from 'react';
import AnimeCard from './AnimeCard';

function AnimeSection({ data }) {
    return (
        <section className="">
            <h3 className="header-title relative left-[-0.75rem] mb-8 top-0 w-[100vw] text-xl text-white text-center py-2">
                Season
            </h3>
            <div className="grid grid-cols-2 gap-5">
                {data?.map((anime) => (
                    <AnimeCard key={anime.mal_id} anime={anime} />
                ))}
            </div>
        </section>
    );
}

export default AnimeSection;
