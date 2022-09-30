import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import animeApi from '../api/animesApi';

function AnimeDetail(props) {
    const param = useParams();
    const [anime, setAnime] = useState({});
    // console.log(param.aniID);
    useEffect(() => {
        (async () => {
            const res = await animeApi.getAnimeById(param.aniID);
            setAnime(res.data);
        })();
    }, [param]);
    console.log(anime);
    return <div>Anime Detail page</div>;
}

export default AnimeDetail;
