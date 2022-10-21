import React from 'react';
import { Link } from 'react-router-dom';
import AnimeCard from './AnimeCard';

function AnimeSection({ data }) {
    return (
        <section className="">
            <h3 className="header-title text-xl text-white text-center py-2 lg:static lg:w-full">
                Season Now
            </h3>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
                {data?.map((anime) => (
                    <AnimeCard key={anime.mal_id} anime={anime} />
                ))}
            </div>
            <Link
                to="/seasons/now"
                className="block mt-5 text-center font-[500] text-white text-[24px] bg-[#161e21] w-full"
            >
                See More
            </Link>
        </section>
    );
}

export default AnimeSection;
