import React from 'react';
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
function NavBarItem({ to, data, text }) {
    return (
        <>
            {data ? (
                <li className="group cursor-pointer relative">
                    <div className="flex items-center justify-between">
                        <span className="block text-white px-4 py-2">{text}</span>
                        <BiChevronDown size={30} className="lg:mr-0 mr-8 text-green-500" />
                    </div>
                    <ul
                        className="flex-wrap hidden group-hover:flex lg:absolute lg:top-full lg:left-[-60px] lg:w-[300px] 
                    lg:scrollbar-hide lg:h-[500px] lg:overflow-y-scroll lg:bg-white lg:border-t-[4px] lg:border-[#b5e745]
                    before:content-[''] absolute top-full left-0 z-[12] w-full right-0
                    "
                    >
                        {data?.map((item, index) => (
                            <li
                                key={item?.mal_id}
                                className="flex flex-wrap hover:text-red-500 font-semibold w-[50%] text-ellipsis overflow-hidden text-sm py-3 pl-1"
                            >
                                <Link to={`/geres/${item?.mal_id}`} className="w-full h-full">
                                    {item?.name}
                                </Link>
                            </li>
                        ))}
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

export default React.memo(NavBarItem);
