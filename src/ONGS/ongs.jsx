import React from "react";
import "./ongs.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from 'react-router-dom';

import GreenPeace from "../assets/greenpeace.png";
import Jaguar from "../assets/jaguar.png";
import WWF from "../assets/wwf.png"


function Ongs() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <Navbar />
            <div className="container-ongs">
                <div className="ongs-list">
                    <div className="ongs-card">
                        <button
                            className="ong-btn"
                            onClick={() => {navigate('/Pag')}}
                        >
                            <img src={GreenPeace} alt="GreenPeace"/>
                        </button>
                        <span className="wiki">
                        "Greenpeace é uma organização não governamental atuante em escala global que tem como objetivo promover a proteção do meio ambiente e da biodiversidade.
                        Desde 1971, quando a sua história começou, o Greenpeace promove ações não violentas que têm como objetivo conscientizar, em médio e longo prazo,
                        a população dos impactos ambientais, além de pressionar autoridades públicas e entes privados a agirem em prol de sua solução."
                        </span>
                    </div>
                    <div className="ongs-card">
                        <button
                            className="ong-btn"
                            onClick={() => {navigate('/Pag')}}
                        >
                            <img src={Jaguar} alt="Instituto Onça-Pintada"/>
                        </button>
                        <span className="wiki">
                        O Instituto Onça-Pintada (IOP) é uma ONG dedicada exclusivamente a promover a conservação da onça-pintada, maior felino do continente Americano.
                        </span>
                    </div>
                    <div className="ongs-card">
                        <button
                            className="ong-btn"
                            onClick={() => {navigate('/Pag')}}
                        >
                            <img src={WWF} alt="WWF"/>
                        </button>
                        <span className="wiki">
                        A World Wide Fund for Nature Inc. (WWF) é uma organização não-governamental internacional fundada em 1961 que trabalha na área de preservação da natureza e redução do impacto humano no meio ambiente.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Ongs;
