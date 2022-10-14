import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/img/defaultAvatar.jpg';
function CardSearch({ card, setShow, setInput }) {
    const navigate = useNavigate();
    const handlevigate = (e) => {
        if (!setShow) return;
        setShow(false);
        setInput('');
        navigate(`/anime/${card?.mal_id}`);
    };
    return (
        <li className="flex gap-4 cursor-pointer p-4 group" onClick={handlevigate}>
            <div className="w-[50px] h-[70px]">
                <img
                    src={card?.images?.jpg?.image_url || defaultAvatar}
                    alt=""
                    className="group-hover:opacity-60 w-full h-full object-cover"
                />
            </div>
            <div className="flex-1 group-hover:text-white">
                <h5 className="font-semibold truncate-line-2 text-[14px]">
                    {card?.title_english || card?.title}
                </h5>
                <p className="font-[500] text-[12px]">episodes {card?.episodes || '?'}</p>
            </div>
        </li>
    );
}

export default CardSearch;
