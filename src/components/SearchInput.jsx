import { memo, useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useDebounce from '../hooks/useDebounce';
import animeApi from '../api/animesApi';
import CardSearch from './CardSearch';
import { Link } from 'react-router-dom';
function SearchInput(props) {
    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const debouncedValue = useDebounce(inputValue, 400);
    const [showSearch, setShowSearch] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const handleChangeInputSearch = (e) => {
        const value = e.target.value;
        if (value[0] === ' ') return;
        setInputValue(value);
    };
    useEffect(() => {
        inputValue &&
            (async () => {
                const data = await animeApi.getAnimeByFilter({ q: debouncedValue, limit: 5 });
                setSearchResult(data.data.data);
                if (data.data.data.length > 0) {
                    setShowSearch(true);
                } else {
                    setShowSearch(false);
                }
            })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);
    useEffect(() => {
        if (inputValue === '') setShowSearch(false);
    }, [inputValue]);
    console.log(searchResult);

    return (
        <div className="bg-[#00000099] h-[40px] flex border-[#263238] rounded-sm border-2 relative">
            <button className="px-4 w-[44px]">
                <AiOutlineSearch className=" w-[16px] text-" />
            </button>
            <input
                type="text"
                className=" h-full flex-1 bg-transparent  outline-0 text-white group"
                placeholder="Search"
                value={inputValue}
                onChange={handleChangeInputSearch}
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                    setTimeout(() => {
                        setIsFocus(false);
                    }, 100);
                }}
            />
            {showSearch && (
                <ul
                    className={`absolute left-0 right-0 bg-[#214354] z-[12] top-full max-w-[510px] 
               transition-all ${isFocus ? 'visible' : 'invisible'}`}
                >
                    {searchResult?.slice(0, 5).map((card, idx) => (
                        <CardSearch
                            key={card.mal_id}
                            card={card}
                            setShow={setShowSearch}
                            setInput={setInputValue}
                            setSearchResult={setSearchResult}
                        />
                    ))}
                    <li className="">
                        <button className="block w-full h-full p-2 text-white bg-[#f44336]">
                            Enter to search
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default memo(SearchInput);
