import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function NavBar({ isMobile, onShowNav }) {
    const handleToggleNav = (e) => {
        if (onShowNav && isMobile && e.currentTarget === e.target) {
            onShowNav((prev) => !prev);
        }
    };
    return (
        <>
            {isMobile ? (
                <div className="fixed w-full left-0 top-0 bottom-0" onClick={handleToggleNav}>
                    <nav className="absolute left-0 top-0 bottom-0 w-[270px] bg-[#00000099]">
                        <Link to="/top">Top</Link>
                    </nav>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default NavBar;
