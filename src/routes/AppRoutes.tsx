import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Collections from '../pages/Collections/Collections';
import Profile from '../pages/Profile/Profile';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default AppRoutes;
