import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { FaRadiationAlt } from 'react-icons/fa';
import { BsPlayCircle } from 'react-icons/bs';

import useTrunc from '../hooks/useTrunc';
import animeApi from '../api/animesApi';
import AnimeRanking from '../components/AnimeRanking';
import RenderStar from '../utils/RenderStar';
function AnimeDetail(props) {
    const param = useParams();
    const [anime, setAnime] = useState({});
    const [rankingAnime, setRankingAnime] = useState([]);

    // const [filter, setFilter] = useState({ type: 'tv', limit: 10 });
    // const handleChangeRanking = useCallback((newType) => {
    //     setFilter({ ...filter, type: newType });
    // }, []);

    useEffect(() => {
        (async () => {
            const res = await animeApi.getAnimeById(param.aniID);
            setAnime(res.data.data);
        })();
    }, [param]);
    console.log(anime);
    return (
        <div className="px-4">
            <div className="mx-auto lg:max-w-6xl grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-3">
                    <header className="relative h-[840px] lg:h-auto p-4">
                        <div className="flex flex-col relative z-10">
                            <h4 className="md:hidden text-3xl text-greensSecondary font-bold text-center mb-[20px]">
                                {anime?.title_english}
                            </h4>
                            <p className="md:hidden text-white font-[500] text-[16px] mb-[20px]">
                                {anime?.background ||
                                    "It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from December 2018 to December 2020, with its chapters collected in eleven tankōbon volumes. "}
                            </p>
                            <span className="mx-auto inline-block relative cursor-pointer hover:opacity-60 mb-8">
                                <img
                                    src={anime?.images?.webp?.large_image_url}
                                    alt=""
                                    className="inline-block w-[180px] h-[260px] object-cover object-center"
                                />
                                <span className="absolute top-2 left-2 bg-[#00000090] text-white p-2 cursor rounded-md flex items-center">
                                    <FaRadiationAlt />
                                    <span className="ml-1">Folowing</span>
                                </span>
                                <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <BsPlayCircle
                                        size={50}
                                        className="text-white bg-[#00000066] rounded-[50%]"
                                    />
                                </span>
                                <span className="absolute bottom-4 text-white text-center py-[5px] left-0 w-full text-[20px] font-semibold bg-[#ff000099]">
                                    Watch
                                </span>
                            </span>
                            <div>
                                <h4 className="hidden md:block text-3xl text-greensSecondary font-bold text-center">
                                    {anime?.title_english}
                                </h4>
                                <p className="hidden md:block text-white font-[500] text-[16px]">
                                    {anime?.background}
                                </p>
                                <p className="text-[14px] text-[#78909c] font-semibold">
                                    {useTrunc(anime?.synopsis, 240)}
                                </p>
                                <div className="border-t border-[#ffffff33] mt-5">
                                    <span className="flex text-[#ffc107]">
                                        <RenderStar rating={anime?.score} size={16} />
                                    </span>
                                    <p className="text-white text-[14px]">
                                        rated {anime?.score ? `${anime.score}` : 'Unknow'} by{' '}
                                        {anime?.members ? `${anime.members}` : 'Nobody'} viewer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img
                            src={anime?.trailer?.images?.medium_image_url}
                            alt=""
                            className="block top-0 left-0 w-full h-full object-cover absolute opacity-40 z-0"
                        />
                    </header>
                </div>
                <div className="col-span-1">
                    {/* <AnimeRanking data={rankingAnime} onChangeRank={handleChangeRanking} /> */}
                </div>
            </div>
        </div>
    );
}

export default AnimeDetail;
