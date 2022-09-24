import React from 'react';
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
function NavBarItem({ to, data, text }) {
    return (
        <>
            {data ? (
                <li className="group lg:relative cursor-pointer">
                    <div className="flex items-center justify-between">
                        <span className="block text-white px-4 py-2">{text}</span>
                        <BiChevronDown size={30} className="mr-8 text-green-500" />
                    </div>
                    <ul
                        className="flex-wrap hidden group-hover:flex lg:absolute lg:top-full lg:right-0 lg:w-[300px] 
                    lg:scrollbar-hide lg:h-[500px] lg:overflow-y-scroll lg:bg-white lg:border-t-[4px] lg:border-[#b5e745]
                    before:content-['']
                    "
                    >
                        {data?.map((item, idx) => {
                            const seasons = item?.seasons.map((season) => (
                                <li
                                    key={`${item?.year}-${season}`}
                                    className="flex flex-wrap w-[50%] text-ellipsis overflow-hidden text-sm py-3 pl-1"
                                >
                                    <Link
                                        to={`/seasons/${item?.year}/${season}`}
                                        className="w-full h-full"
                                    >
                                        {`${season}-${item?.year}`}
                                    </Link>
                                </li>
                            ));

                            return seasons;
                        })}
                    </ul>
                </li>
            ) : (
                <li className="flex items-center justify-between">
                    <Link to={to} className="block text-white px-4 py-2">
                        {text}
                    </Link>
                </li>
            )}
        </>
    );
}

export default NavBarItem;
