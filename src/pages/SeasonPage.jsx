import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import seasonsApi from '../api/seasonsApi';
function SeasonPage(props) {
    const param = useParams();
    const [anime, setAnime] = useState([]);
    const navigate = useNavigate();
    navigate();
    const { filter, setFilter } = { limit: 30, page: 1 };
    const location = useLocation();
    console.log(location);
    useEffect(() => {
        (async () => {
            try {
                if (param.year && param.season) {
                    const res = await seasonsApi.getSeason(param, filter);
                    setAnime(res.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [param, filter]);
    console.log(anime);
    return (
        <>
            <Content />
        </>
    );
}

export default SeasonPage;
