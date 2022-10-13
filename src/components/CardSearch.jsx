import React from 'react';
import defaultAvatar from '../assets/img/defaultAvatar.jpg';
function CardSearch(props) {
    return (
        <li className="flex h-[80px] gap-4 cursor-pointer p-4">
            <div className="w-[50px] h-[70px]">
                <img src={defaultAvatar} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
                <h5 className="font-semibold truncate-line-2 text-[14px]">
                    Cong chua re rach Cong chua re rach Cong chua re rach
                </h5>
                <p className="font-[500] text-[12px]">tap 2</p>
            </div>
        </li>
    );
}

export default CardSearch;
