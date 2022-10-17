import { useEffect, useState, useMemo } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import Content from '../components/Content';
import animeApi from '../api/animesApi';
function AnimeListGere(props) {
    const param = useParams();
    const [animeList, setAnimeList] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [pagination, setPagination] = useState({});
    const queryparams = useMemo(() => {
        return queryString.parse(location.search);
    }, [location.search]);

    const [filter, setFilter] = useState(() => ({
        ...queryparams,
        limit: Number.parseInt(queryparams?.limit) || 20,
        page: Number.parseInt(queryparams?.page) || 1,
        genres: param.id,
    }));
    console.log(param.id);
    useEffect(() => {
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filter),
        });
    }, [filter]);
    useEffect(() => {
        console.log('oop1');
        const fetchAnime = async () => {
            try {
                if (param.id) {
                    const res = await animeApi.getAnimeByFilter(filter);
                    console.log('helo');
                    setAnimeList(res.data.data);
                    setPagination(res.data.pagination);
                }
            } catch (error) {
                console.log(error);
                console.log('oop');
                setTimeout(async () => {
                    const res = await animeApi.getAnimeByFilter(filter);
                    setAnimeList(res.data.data);
                    setPagination(res.data.pagination);
                }, 1000);
            }
        };

        fetchAnime();
    }, [param, filter]);
    const onPageChange = (newPage) => {
        setFilter({ ...filter, page: newPage });
    };
    return (
        <>
            <Content animeList={animeList} pagination={pagination} onPageChange={onPageChange} />
        </>
    );
}

export default AnimeListGere;
