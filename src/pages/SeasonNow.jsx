import { useEffect, useState, useMemo } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import Content from '../components/Content';
import seasonsApi from '../api/seasonsApi';
function SeasonPage(props) {
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
    }));
    useEffect(() => {
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filter),
        });
    }, [filter]);
    console.log('wibu');
    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const res = await seasonsApi.getSeasonNow(filter);
                setAnimeList(res.data.data);
                setPagination(res.data.pagination);
            } catch (error) {
                console.log(error);
                setTimeout(async () => {
                    const res = await seasonsApi.getSeasonNow(filter);
                    setAnimeList(res.data.data);
                    setPagination(res.data.pagination);
                }, 1000);
            }
        };

        fetchAnime();
    }, [filter]);
    const onPageChange = (newPage) => {
        setFilter({ ...filter, page: newPage });
    };
    return (
        <>
            <Content animeList={animeList} pagination={pagination} onPageChange={onPageChange} />
        </>
    );
}

export default SeasonPage;
