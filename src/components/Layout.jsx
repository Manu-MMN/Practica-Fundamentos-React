import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
    return (
        <>
            <Navigation />
            <main className="container mx-auto px-4 py-8">
                <Outlet />
            </main>
        </>
    );
};

export default Layout; 