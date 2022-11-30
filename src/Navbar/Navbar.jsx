import React from "react";
import { useNavigate } from 'react-router-dom';

import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="container-navbar">
            <div className="navbar">
                <div className="projeto-nome">
                    <h1>TAKIMUNDO</h1>
                </div>
                <div className="container-btn-navigate">
                    <button
                        className="btn-navbar"
                        onClick={() => {navigate("/Main")}}
                    >
                        HOME
                    </button>
                    <button className="btn-navbar">
                            <a className="btn-news" href="https://news.un.org/pt/">NEWS</a>
                    </button>
                    <button
                        className="btn-navbar"
                        onClick={() => {navigate("/Sobre")}}
                    >
                        SOBRE
                    </button>
                    <button
                        className="btn-navbar"
                        onClick={() => {navigate("/Ongs")}}
                        >
                        ONGS
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Navbar;
