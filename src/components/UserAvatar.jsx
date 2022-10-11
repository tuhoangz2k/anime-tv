import { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiChevronDown, BiLogOut } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { UserAuth } from '../context/Auth';
import defaultAvatar from '../assets/img/defaultAvatar.jpg';
function UserAvatar() {
    const { logout } = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="group flex items-center relative">
            <div className="w-[40px] h-[40px] cursor-pointer">
                <img
                    src={defaultAvatar}
                    alt=""
                    className="w-full h-full object-cover rounded-[50%]"
                />
            </div>
            <BiChevronDown size={22} className="text-white" />
            <ul className="group-hover:visible invisible transition-all duration-300 absolute w-[200px] left-[-80px] top-[110%] bg-[#284048] z-10 cursor-pointer rounded-md">
                <li className="p-2 font-[500] flex items-center gap-2 hover:bg-[#78909c] hover:text-white">
                    <FaUserAlt /> Info
                </li>
                <li className="p-2 font-[500] flex items-center gap-2 hover:bg-[#78909c] hover:text-white">
                    <MdLocalMovies /> My Movies
                </li>
                <li
                    className="p-2 font-[500] flex items-center gap-2 hover:bg-[#78909c] hover:text-white"
                    onClick={handleLogout}
                >
                    <BiLogOut /> Logout
                </li>
            </ul>
        </div>
    );
}

export default memo(UserAvatar);
