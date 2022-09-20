import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
function NavBar({ isMobile, onShowNav, showNav }) {
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
                        } transition-all top-0 bottom-0 w-[270px] bg-[#263238] opacity-90`}
                    >
                        <div className="py-4 px-2 bg-[#090b0c] mt-4 relative opacity-100">
                            <Button
                                to="/login"
                                className="bg-primary w-[200px] rounded-sm text-white flex items-center justify-center mx-auto h-[40px]"
                            >
                                Login
                            </Button>
                        </div>
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/top">Top</Link>
                        </div>

                        <div>
                            <Link to="/season">Season</Link>
                        </div>
                    </nav>
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default NavBar;
