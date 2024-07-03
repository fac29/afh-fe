import './App.css';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <AppRoutes />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
