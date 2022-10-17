import { memo, useState, useCallback, useEffect } from 'react';
import AnimeCard from './AnimeCard';
import AnimeRanking from './AnimeRanking';
import animeApi from '../api/animesApi';
import Pagination from './Pagination';
function Content({ animeList, pagination, onPageChange }) {
    const [rankingAnime, setRankingAnime] = useState([]);
    const [filterRanking, setFilterRaking] = useState({ type: 'tv', limit: 10 });
    const handleChangeRanking = useCallback((newType) => {
        setFilterRaking({ ...filterRanking, type: newType });
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const res = await animeApi.getTop(filterRanking);
                setRankingAnime(res.data.data);
            } catch (error) {
                console.log(error);
                setTimeout(async () => {
                    const res = await animeApi.getTop({ limit: 60 });
                    setRankingAnime(res.data.data);
                }, 1000);
            }
        })();
    }, [filterRanking]);
    return (
        <div className="px-4">
            <Pagination pagination={pagination} onPageChange={onPageChange} />
            <div className="mx-auto px-3 lg:px-0 lg:max-w-6xl grid lg:grid-cols-4 grid-cols-none gap-6">
                <div className="col-span-3 grid grid-cols-1 gap-10">
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
                        {animeList.map((anime) => (
                            <div className="" key={anime.mal_id}>
                                <AnimeCard anime={anime} />
                            </div>
                        ))}
                    </div>
                </div>
                <AnimeRanking data={rankingAnime} onChangeRank={handleChangeRanking} />
            </div>
            <Pagination pagination={pagination} onPageChange={onPageChange} />
        </div>
    );
}

export default memo(Content);
