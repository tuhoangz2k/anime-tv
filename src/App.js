import { Navigate, Route, Routes } from 'react-router-dom';
import AnimeDetail from './pages/AnimeDetail';
import DefaultHome from './pages/DefaultHome';
import Home from './pages/Home';
import Header from './components/Header';
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route element={<Navigate to="/anime" replace={true} />} path="/" />
                <Route element={<Home />} path={'/anime'}>
                    <Route element={<DefaultHome />} index />
                    <Route element={<AnimeDetail />} path={':aniID'} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
