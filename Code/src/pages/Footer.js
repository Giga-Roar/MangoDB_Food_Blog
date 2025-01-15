import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <>
            <footer>
                <h5>Few famous Indian Chefs</h5>

                <div className="footer_images">
                    <div className="footer_img">
                        <img src="/ASSETS/Img/Chef_VK.jpeg" alt="Vikas Khanna" />
                        <div className="layer">
                            <h3>Chef Vikas Khanna</h3>
                        </div>
                    </div>

                    <div className="footer_img">
                        <img src="/ASSETS/Img/Chef_SK.jpg" alt="Sanjeev Kapoor" />
                        <div className="layer">
                            <h3>Chef Sanjeev Kapoor</h3>
                        </div>
                    </div>

                    <div className="footer_img">
                        <img src="/ASSETS/Img/Chef_TD.jpg" alt="Tarla Dalal" />
                        <div className="layer">
                            <h3>Chef Tarla Dalal</h3>
                        </div>
                    </div>

                    <div className="footer_img">
                        <img src="/ASSETS/Img/Chef_RB.jpeg" alt="Ranveer Brar" />
                        <div className="layer">
                            <h3>Chef Ranveer Brar</h3>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <p className="footer_para">
                    <sup><FontAwesomeIcon icon={faQuoteLeft} /></sup> A recipe has no soul.
                    You as a cook must bring soul to the recipe.
                    <sup><FontAwesomeIcon icon={faQuoteRight} /></sup>
                </p>

                <img src="/ASSETS/Img/MangoDB.jpg" alt='MangoDB Corp.' id='corp' />
                <p>
                    <span>&copy;</span> This website is for the sole purpose of a
                    mini-project only.
                </p>
            </footer>
        </>
    )
}

export default Footer;