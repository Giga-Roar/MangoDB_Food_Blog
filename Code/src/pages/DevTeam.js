import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function DevTeam() {
    return (
        <>
            <Navigation />
            <div className="team_container">
                <h3> The Team </h3>
                <div className="team">
                    <div className="card">
                        <div className="lines"></div>
                        <div className="img_Box">
                            <img src="/assets/Img/Team/Aathreya.jpg" alt="Aathreya D A" />
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2>Aathreya D A <br /> <span>Backend dev</span> </h2>
                                <div className="mail">
                                    Mail Id: <span>aathreyathebro@gmail.com</span>
                                </div>
                                <div className="social_Btn">
                                    <button className="igBtn"><Link to="https://www.instagram.com/l0rd_vad3r_/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                                        <FontAwesomeIcon icon={faInstagram} /> Instagram
                                    </Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="lines"></div>
                        <div className="img_Box">
                            <img src="/assets/Img/Team/Ajith.jpg" alt="Ajith S.P" />
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2>Ajith S.P <br /> <span>Frontend dev & UI designer</span> </h2>
                                <div className="mail">
                                    Mail Id: <span><Link to="mailto:ajithsp224@gmail.com">ajithsp224@gmail.com</Link></span>
                                </div>
                                <div className="social_Btn">
                                    <button className="igBtn"><Link to="https://www.instagram.com/asp_04_05/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                                        <FontAwesomeIcon icon={faInstagram} /> Instagram
                                    </Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="lines"></div>
                        <div className="img_Box">
                            <img src="/assets/Img/Team/Akarsh.jpg" alt="Akarsh T O" />
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2>Akarsh T O <br /> <span>DataBase Manager</span> </h2>
                                <div className="mail">
                                    Mail Id: <span><Link to="mailto:akarsh1064@gmail.com">akarsh1064@gmail.com</Link></span>
                                </div>
                                <div className="social_Btn">
                                    <button className="igBtn"><Link to="https://www.instagram.com/20akarsh/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                                        <FontAwesomeIcon icon={faInstagram} /> Instagram
                                    </Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DevTeam;
