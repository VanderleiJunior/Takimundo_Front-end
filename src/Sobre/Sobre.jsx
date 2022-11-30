import React from "react";
import "./Sobre.css";
import Navbar from "../Navbar/Navbar";


function Sobre() {

    return (
        <div className="container">
            <Navbar />
            <div className="container-sobre">
                <div className="sobre-card">
                    <span className="title"><h1>Projeto Takimundo</h1></span>
                    <span className="wiki">
                        O projeto Takimundo é sobre um fórum de discussões focado nas pautas da Agenda 2030, criada pela Organização das Nações Unidas (ONU).
                        O objetivo é divulgar e criar incentivos entre as pessoas interagirem entre si com ideias e a apoiarem as propostas com doações para ONG’s engajadas.
                    </span>
                </div>
            </div>
        </div>
    );
}


export default Sobre;