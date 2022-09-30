import React from 'react';
import AnimeCard from './AnimeCard';

function AnimeSection({ data }) {
    return (
        <section className="">
            <h3 className="header-title text-xl text-white text-center py-2 lg:static lg:w-full">
                Season
            </h3>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
                {data?.map((anime) => (
                    <AnimeCard key={anime.mal_id} anime={anime} />
                ))}
            </div>
        </section>
    );
}

export default AnimeSection;
