import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faList, faCircleInfo, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';

function Navigation() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200); // 1.2 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleLinkClick = (e, path) => {
        if (path === window.location.pathname) {
            e.preventDefault();
            window.location.reload();
        }
    };

    useEffect(() => {
        const pageTitle = getPageTitle(location.pathname);
        document.title = `Aroma House | ${pageTitle}`;
    }, [location.pathname]);

    const getPageTitle = (pathname) => {
        switch (pathname) {
            case '/':
                return 'Home';
            case '/categories':
                return 'Categories';
            case '/about':
                return 'About';
            case '/devTeam':
                return 'Dev Team';
            default:
                return '';
        }
    };

    return (
        <>
            {loading && <Preloader />}
            {!loading && (
                <div className="container-fluid">
                    <header>
                        <div id="logo">
                            <Link to="/">
                                <h1 id="logo_text">Mango DB</h1>
                                <p id="logo_subtext">Since 2004</p>
                            </Link>
                        </div>
                        <nav>
                            <Link to="/" id="home_link" className={`nav_links ${location.pathname === '/' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, '/')} target='_self'>
                                <li><FontAwesomeIcon icon={faHouse} className="fa-icon" /> Home</li>
                            </Link>
                            <Link to="/categories" id="category_link" className={`nav_links ${location.pathname === '/categories' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, '/categories')} target='_blank'>
                                <li><FontAwesomeIcon icon={faList} /> Categories</li>
                            </Link>
                            <Link to="/about" id="about_link" className={`nav_links ${location.pathname === '/about' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, '/about')} target='_blank'>
                                <li><FontAwesomeIcon icon={faCircleInfo} /> About</li>
                            </Link>
                            <Link to="/devTeam" id="team_link" className={`nav_links ${location.pathname === '/devTeam' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, '/devTeam')} target='_blank'>
                                <li><FontAwesomeIcon icon={faCode} /> Dev Team</li>
                            </Link>
                        </nav>

                    </header>
                </div>
            )}
        </>
    )
}
export default Navigation;