import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
    Navigate
} from "react-router-dom";
import LoginAdmin from './views/Login/login';
import AdminPage from './views/admin'

function App() {
    return (
        <BrowserRouter>
            <Routes className="App">
                <Route path="/*" element={<AdminPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
