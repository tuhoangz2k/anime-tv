import { Navigate, Route, Routes } from 'react-router-dom';
import AnimeDetail from './pages/AnimeDetail';
import DefaultHome from './pages/DefaultHome';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import { AuthContextProvider } from './context/Auth';
import './App.css';
import SignUp from './pages/SignUp';
import { UserAuth } from './context/Auth';
import SeasonPage from './pages/SeasonPage';
import AnimeListGere from './pages/AnimeListGere';

function App() {
    const { user } = UserAuth();

    return (
        <>
            <Header />
            <Routes>
                <Route element={<Navigate to="/anime" replace={true} />} path="/" />
                <Route element={<Home />} path={'/anime'}>
                    <Route element={<DefaultHome />} index />
                    <Route element={<AnimeDetail />} path={':aniID'} />
                </Route>
                <Route element={user?.uid ? <Navigate to="/anime" /> : <Login />} path={'/login'} />
                <Route
                    element={user?.uid ? <Navigate to="/anime" /> : <SignUp />}
                    path={'/signup'}
                />
                <Route element={<SeasonPage />} path={'/seasons/:year/:season'} />
                <Route element={<AnimeListGere />} path={'/geres/:id'} />
            </Routes>
        </>
    );
}

export default App;
