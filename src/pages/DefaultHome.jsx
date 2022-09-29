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
function DefaultHome() {
    const [seasonAnime, setSeasonAnime] = useState([]);
    const [rankingAnime, setRankingAnime] = useState([]);
    const [filter, setFilter] = useState({ type: 'tv', limit: 10 });
    const slidesAnime = [...seasonAnime].slice(0, 10);
    useEffect(() => {
        (async () => {
            try {
                const res = await seasons.getSeasonNow({ limit: 20 });
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
        <div>
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
                            <img
                                src={anime?.trailer?.images?.large_image_url}
                                alt={anime?.title_english}
                                className="h-full w-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mx-auto px-3 lg:max-w-6xl grid lg:grid-cols-4 grid-cols-none">
                <AnimeSection data={seasonAnime} />
                <AnimeRanking data={rankingAnime} onChangeRank={handleChangeRanking} />
            </div>
        </div>
    );
}

export default DefaultHome;
