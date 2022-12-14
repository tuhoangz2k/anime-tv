import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import NavBarItem from './NavBarItem';
import animeApi from '../api/animesApi';
import seasonsApi from '../api/seasonsApi';
import SeasonList from './SeasonList';
import { UserAuth } from '../context/Auth';
import UserAvatar from './UserAvatar';
function NavBar({ isMobile, onShowNav, showNav }) {
    const [genres, setGenres] = useState([]);
    const [seasons, setSeasons] = useState([]);
    const { user } = UserAuth();
    const handleToggleNav = (e) => {
        if (onShowNav && isMobile && e.currentTarget === e.target) {
            onShowNav((prev) => !prev);
        }
    };
    const closeNav = () => {
        onShowNav((prev) => !prev);
    };
    useEffect(() => {
        const getGenres = async () => {
            try {
                const res = await animeApi.getAllGenres();
                setGenres(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getGenres();
    }, []);
    useEffect(() => {
        const getSeasons = async () => {
            const res = await seasonsApi.getSeasonList();
            setSeasons(res.data.data);
        };
        getSeasons();
    }, []);
    return (
        <>
            {isMobile ? (
                <>
                    <div
                        className={`fixed w-full ${
                            showNav ? ' block' : 'hidden'
                        } transition-all left-0 top-0 bottom-0 bg bg-[#00000099] z-[5]`}
                        onClick={handleToggleNav}
                    ></div>

                    <nav
                        className={`absolute ${
                            showNav ? 'left-0 opacity-100' : 'left-[-100%] opacity-0'
                        } transition-all top-0 bottom-0 w-[290px] bg-[#263238] opacity-90 overflow-y-scroll z-[10]`}
                    >
                        <div className="py-4 px-2 bg-[#090b0c] mt-4 w-[90%] mx-auto relative opacity-100">
                            {user?.accessToken ? (
                                <div className="flex items-center justify-center">
                                    <UserAvatar />
                                </div>
                            ) : (
                                <Button
                                    onClick={closeNav}
                                    to="/login"
                                    className="bg-primary w-[200px]  rounded-sm text-white flex items-center justify-center mx-auto h-[40px]"
                                >
                                    Login
                                </Button>
                            )}
                        </div>

                        <ul>
                            <NavBarItem text="Home" to="/" />
                            <NavBarItem text="Top" to="/top" />
                            <SeasonList text="Season" data={seasons} />
                            <NavBarItem text="Genres" data={genres} />
                        </ul>
                    </nav>
                </>
            ) : (
                <>
                    <ul className="flex">
                        <NavBarItem text="Home" to="/" />
                        <NavBarItem text="Top" to="/top" />
                        <SeasonList text="Season" data={seasons} />
                        <NavBarItem text="Genres" data={genres} />
                    </ul>
                    <div>
                        {user?.accessToken ? (
                            <UserAvatar />
                        ) : (
                            <Button
                                to="/login"
                                className="bg-primary w-[100px] rounded-sm text-white flex items-center justify-center mx-auto h-[40px]"
                            >
                                Login
                            </Button>
                        )}
                    </div>
                </>
            )}
        </>
    );
}

export default memo(NavBar);
