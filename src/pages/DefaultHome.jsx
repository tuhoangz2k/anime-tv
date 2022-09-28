import { useEffect, useCallback } from 'react';
import { useState } from 'react';
import AnimeSection from '../components/AnimeSection';
import animeApi from '../api/animesApi';
import AnimeRanking from '../components/AnimeRanking';
function DefaultHome() {
    const [topAnime, setTopAnime] = useState([]);
    const [rankingAnime, setRankingAnime] = useState([]);
    const [filter, setFilter] = useState({ type: 'tv', limit: 10 });
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

    useEffect(() => {
        (async () => {
            try {
                const res = await animeApi.getTop(filter);
                setRankingAnime(res.data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [filter]);
    const handleChangeRanking = useCallback((newType) => {
        setFilter({ ...filter, type: newType });
    }, []);
    console.log(rankingAnime);
    return (
        <div>
            <div className="px-3 lg:max-w-6xl grid lg:grid-cols-4 grid-cols-none">
                <AnimeSection data={topAnime} />
                <AnimeRanking data={rankingAnime} onChangeRank={handleChangeRanking} />
            </div>
        </div>
    );
}

export default DefaultHome;
