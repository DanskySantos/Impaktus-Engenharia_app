import {ReactComponent as GithubIcon} from "../../assets/img/github.svg";
import React from "react";
import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>Impaktus Engenharia</h1>
                    <a href="https://impaktusengenharia.com.br/">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className = "dsmovie-contact-link">/login</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )

}

export default Navbar;