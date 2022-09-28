import { useState, memo } from 'react';
import TopCard from './TopCard';
const navTop = ['TV', 'Movie', 'Special', 'Ova'];
function AnimeRanking({ data, onChangeRank }) {
    const [toggleNavTop, setToggleNavTop] = useState(0);
    const handleOnclick = (type, index) => {
        if (index === toggleNavTop || !onChangeRank) return;
        onChangeRank(type);
        setToggleNavTop(index);
    };
    return (
        <div className="bg-[#181c1e] hidden lg:block">
            <h3 className="bg-primary text-lg text-white text-center py-2">Ranking</h3>
            <nav className="grid grid-cols-4 mt-4 bg-[#7d7d7d] text-white">
                {navTop.map((tag, idx) => (
                    <span
                        key={idx}
                        onClick={() => handleOnclick(tag, idx)}
                        className={`text-center border-r-2 font-[600] last:border-none cursor-pointer ${
                            toggleNavTop === idx ? 'bg-[#339966] border-none text-red-600' : ''
                        }`}
                    >
                        {tag}
                    </span>
                ))}
            </nav>
            {data.map((anime, index) => (
                <TopCard key={index} anime={anime} />
            ))}
        </div>
    );
}

export default memo(AnimeRanking);
