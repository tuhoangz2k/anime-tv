import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import NavBarItem from './NavBarItem';
function NavBar({ isMobile, onShowNav, showNav, genres }) {
    const handleToggleNav = (e) => {
        if (onShowNav && isMobile && e.currentTarget === e.target) {
            onShowNav((prev) => !prev);
        }
    };
    return (
        <>
            {isMobile ? (
                <>
                    <div
                        className={`fixed w-full ${
                            showNav ? ' block' : 'hidden'
                        } transition-all left-0 top-0 bottom-0 bg bg-[#00000099]`}
                        onClick={handleToggleNav}
                    ></div>

                    <nav
                        className={`absolute ${
                            showNav ? 'left-0 opacity-100' : 'left-[-100%] opacity-0'
                        } transition-all top-0 bottom-0 w-[290px] bg-[#263238] opacity-90 overflow-y-scroll`}
                    >
                        <div className="py-4 px-2 bg-[#090b0c] mt-4 relative opacity-100">
                            <Button
                                to="/login"
                                className="bg-primary w-[200px] rounded-sm text-white flex items-center justify-center mx-auto h-[40px]"
                            >
                                Login
                            </Button>
                        </div>

                        <ul>
                            <NavBarItem text="Home" to="/" />
                            <NavBarItem text="Top" to="/top" />
                            <NavBarItem text="Season" to="/season" />
                            <NavBarItem text="Genres" data={genres} />
                        </ul>
                    </nav>
                </>
            ) : (
                <>
                    <ul className="flex">
                        <NavBarItem text="Home" to="/" />
                        <NavBarItem text="Top" to="/top" />
                        <NavBarItem text="Season" to="/season" />
                        <NavBarItem text="Genres" data={genres} />
                    </ul>
                    <div>
                        <Button
                            to="/login"
                            className="bg-primary w-[100px] rounded-sm text-white flex items-center justify-center mx-auto h-[40px]"
                        >
                            Login
                        </Button>
                    </div>
                </>
            )}
        </>
    );
}

export default NavBar;
