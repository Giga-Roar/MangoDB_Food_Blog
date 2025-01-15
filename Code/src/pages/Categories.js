import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

function Categories() {

    const handleLinkClick = (e, path) => {
        if (path === window.location.pathname) {
            e.preventDefault();
            window.location.reload();
        }
    };
    return (
        <>
            <Navigation />
            <section className="row row-cols-3 row-cols-lg-6 g-5 gx-lg-4 categories" style={{ marginTop: '5px' }}>

            <Link to="/category_data/Rice" className="col text-center category_link" onClick={(e) => handleLinkClick(e, '/categories/Rice')}>
                <div className="category_img shadow">
                    <img src="/assets/Img/Categories/Rice.jpg" alt="Rice" loading="lazy" />
                </div>
                <div className="pt-1 category_title">Rice</div>
            </Link>

            <Link to="/category_data/Gravy" className="col text-center category_link" onClick={(e) => handleLinkClick(e, '/categories/Gravy')}>
                <div className="category_img shadow">
                    <img src="/assets/Img/Categories/Gravy.jpg" alt="Gravy" loading="lazy" />
                </div>
                <div className="pt-1 category_title">Gravy</div>
            </Link>

            <Link to="/category_data/Dry" className="col text-center category_link" onClick={(e) => handleLinkClick(e, '/categories/Dry')}>
                <div className="category_img shadow">
                    <img src="/assets/Img/Categories/Dry_Items.jpg" alt="Dry" loading="lazy" />
                </div>
                <div className="pt-1 category_title">Dry</div>
            </Link>

            <Link to="/category_data/Tandoor" className="col text-center category_link" onClick={(e) => handleLinkClick(e, '/categories/Tandoor')}>
                <div className="category_img shadow">
                    <img src="/assets/Img/Categories/Tandoor.jpg" alt="Tandoor" loading="lazy" />
                </div>
                <div className="pt-1 category_title">Tandoor</div>
            </Link>

            <Link to="/category_data/Chinese" className="col text-center category_link" onClick={(e) => handleLinkClick(e, '/categories/Chinese')}>
                <div className="category_img shadow">
                    <img src="/assets/Img/Categories/Chinese.jpg" alt="Chinese" loading="lazy" />
                </div>
                <div className="pt-1 category_title">Chinese</div>
            </Link>

            <Link to="/category_data/Snacks" className="col text-center category_link" onClick={(e) => handleLinkClick(e, '/categories/Snacks')}>
                <div className="category_img shadow">
                    <img src="/assets/Img/Categories/Snacks.jpg" alt="Snacks" loading="lazy" />
                </div>
                <div className="pt-1 category_title">Snacks</div>
            </Link>

            <Link to="/category_data/Regional" className="col text-center category_link" onClick={(e) => handleLinkClick(e, '/categories/Regional')}>
                <div className="category_img shadow">
                    <img src="/assets/Img/Categories/Regional.jpg" alt="Regional" loading="lazy" />
                </div>
                <div className="pt-1 category_title">Regional</div>
            </Link>

            <Link to="/category_data/Sweets" className="col text-center category_link" onClick={(e) => handleLinkClick(e, '/categories/Sweets')}>
                <div className="category_img shadow">
                    <img src="/assets/Img/Categories/Sweets.jpg" alt="Sweets" loading="lazy" />
                </div>
                <div className="pt-1 category_title">Sweets</div>
            </Link>

            <Link to="/category_data/Juice" className="col text-center category_link" onClick={(e) => handleLinkClick(e, '/categories/Juice')}>
                <div className="category_img shadow">
                    <img src="/assets/Img/Categories/Juice.jpg" alt="Juice" loading="lazy" />
                </div>
                <div className="pt-1 category_title">Juice</div>
            </Link>

            </section>
            <Footer />
        </>
    )
}

export default Categories;
