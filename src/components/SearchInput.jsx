import { memo, useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useDebounce from '../hooks/useDebounce';
import animeApi from '../api/animesApi';
import CardSearch from './CardSearch';
function SearchInput(props) {
    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const debouncedValue = useDebounce(inputValue, 400);
    const handleChangeInputSearch = (e) => {
        const value = e.target.value;
        if (value[0] === ' ') return;
        setInputValue(value);
    };
    useEffect(() => {
        inputValue &&
            (async () => {
                const data = await animeApi.getAnimeByFilter({ q: debouncedValue, limit: 5 });
                setSearchResult(data.data);
            })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    return (
        <div className="bg-[#00000099] h-[40px] flex border-[#263238] rounded-sm border-2 relative">
            <button className="px-4 w-[44px]">
                <AiOutlineSearch className=" w-[16px] text-" />
            </button>
            <input
                type="text"
                className=" h-full flex-1 bg-transparent  outline-0 text-white"
                placeholder="Search"
                value={inputValue}
                onChange={handleChangeInputSearch}
            />
            <ul className="absolute left-0 right-0 bg-[#214354] h-[500px] z-[10] top-full">
                <CardSearch />
            </ul>
        </div>
    );
}

export default memo(SearchInput);
