import { useEffect, useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import AnimeSection from '../components/AnimeSection';
import animeApi from '../api/animesApi';
import seasons from '../api/seasonsApi';
import AnimeRanking from '../components/AnimeRanking';
import { Link } from 'react-router-dom';
function DefaultHome() {
    const [seasonAnime, setSeasonAnime] = useState([]);
    const [rankingAnime, setRankingAnime] = useState([]);
    const [filter, setFilter] = useState({ type: 'tv', limit: 10 });
    const slidesAnime = [...seasonAnime].slice(0, 10);
    console.log(seasonAnime);
    useEffect(() => {
        (async () => {
            try {
                const res = await seasons.getSeasonNow({ limit: 60 });
                setSeasonAnime(res.data.data);
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
    return (
        <div className="px-4">
            <div className="block mx-auto lg:max-w-6xl">
                <Swiper
                    modules={[Navigation, EffectFade]}
                    navigation
                    speed={800}
                    slidesPerView={1}
                    effect={'fade'}
                    loop
                    className="h-[500px]"
                >
                    {slidesAnime?.map((anime, index) => (
                        <SwiperSlide key={index}>
                            <Link className="w-full h-full" to={`${anime.mal_id}`}>
                                <img
                                    src={anime?.trailer?.images?.large_image_url}
                                    alt={anime?.title_english}
                                    className="h-full w-full object-cover"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mx-auto px-3 lg:px-0 lg:max-w-6xl grid lg:grid-cols-4 grid-cols-none gap-6">
                <div className="col-span-3 grid grid-cols-1 gap-10">
                    <AnimeSection data={seasonAnime} />
                    <AnimeSection data={seasonAnime} />
                    <AnimeSection data={seasonAnime} />
                </div>
                <AnimeRanking data={rankingAnime} onChangeRank={handleChangeRanking} />
            </div>
        </div>
    );
}

export default DefaultHome;
