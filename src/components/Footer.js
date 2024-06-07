import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <ul className="social-btns">
                <li className="social-btn">
                    <a href="https://twitter.com/i/flow/login" target="_blank"><i className="fab fa-twitter" ></i></a>
                </li>
                <li className="social-btn">
                    <a href="https://www.linkedin.com/mynetwork/" target="_blank"><i className="fab fa-linkedin-in" ></i></a>
                </li>
                <li className="social-btn">
                    <a href="https://open.spotify.com/?" target="_blank"><i className="fab fa-spotify" ></i></a>
                </li>
                {/* <li className="social-btn">
                    <a href="https://codepen.io/about7codes" target="_blank"><i className="fab fa-codepen" ></i></a>
                </li> */}
                <li className="social-btn">
                    <a href="https://github.com/kingsourav12/kingsourav12" target="_blank"><i className="fab fa-github" ></i></a>
                </li>
                </ul>

                <div className="to-top">
                <a className="rocket" href="#root">
                    <img src="img/aeroplan.png" alt="ico" /> <br />
                    <p id="trick">Beam me up, Scotty!</p>
                </a>
                </div>

                <p className="copyright">
                <i className="far fa-copyright" aria-hidden="true"></i> Saurav kumar {new Date().getFullYear()}
                </p>
            </div>
            </footer>
    )
}

export default Footer;
