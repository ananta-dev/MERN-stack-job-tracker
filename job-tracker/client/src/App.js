import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Register, Landing, Error, ProtectedRoute } from './pages';
import {
    AllJobs,
    Profile,
    SharedLayout,
    Stats,
    AddJob,
} from './pages/dashboard';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to='/'>Dashboard</Link>
                <Link to='/register'>Register</Link>
                <Link to='/landing'>Landing</Link>
            </nav>
            <Routes>
                <Route
                    path='/'
                    element={
                        <ProtectedRoute>
                            <SharedLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Stats />} />
                    <Route path='all-jobs' element={<AllJobs />} />
                    <Route path='add-job' element={<AddJob />} />
                    <Route path='profile' element={<Profile />} />
                </Route>
                <Route path='/' element={<div>Dashboard</div>}></Route>
                <Route path='/register' element={<Register />} />
                <Route path='/landing' element={<Landing />} />
                <Route path='*' element={<h1>Error</h1>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
