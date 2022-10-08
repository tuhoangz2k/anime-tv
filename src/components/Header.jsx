import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import Logo from '../assets/img/logoz.png';
import NavBar from './NavBar';
function Header(props) {
    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav);
    };
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleSize);
        handleSize();

        return () => window.removeEventListener('resize', handleSize);
    }, []);
    useEffect(() => {
        if (windowSize.width < 1024) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, [windowSize]);

    return (
        <header className="h-[65px] bg-[#263238]">
            <div className="h-full py-[15px] flex items-center justify-between px-[20px] lg:max-w-6xl mx-auto">
                <Link to="/" className="h-full">
                    <img src={Logo} alt="" className="h-full" />
                </Link>
                <div className="bg-[#00000099] h-[40px] flex border-[#263238] rounded-sm border-2">
                    <button className="px-4 w-[44px]">
                        <AiOutlineSearch className=" w-[16px] text-" />
                    </button>
                    <input
                        type="text"
                        className=" h-full flex-1 bg-transparent  outline-0 text-white"
                        placeholder="Search"
                    />
                </div>
                <div onClick={handleShowNav} className="relative z-10">
                    {showNav ? (
                        <AiOutlineClose
                            fontSize={35}
                            className="ml-[10px] bg-primary text-white rounded-sm lg:hidden"
                        />
                    ) : (
                        <AiOutlineMenu
                            fontSize={35}
                            className="ml-[10px] bg-primary text-white rounded-sm lg:hidden"
                        />
                    )}
                </div>

                <NavBar isMobile={isMobile} showNav={showNav} onShowNav={setShowNav} />
            </div>
        </header>
    );
}

export default Header;
