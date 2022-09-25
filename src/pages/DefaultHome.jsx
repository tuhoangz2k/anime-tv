import React, { useEffect } from 'react';
import { useState } from 'react';
import AnimeSection from '../components/AnimeSection';
import animeApi from '../api/animesApi';
function DefaultHome() {
    const [topAnime, setTopAnime] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const res = await animeApi.getTop({ limit: 10 });
                setTopAnime(res.data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    console.log(topAnime);
    return (
        <div className="px-3">
            <AnimeSection data={topAnime} />
        </div>
    );
}

export default DefaultHome;
