import React from "react";
import "./pagamento.css";
import Navbar from "../Navbar/Navbar";

import QrCode from "../assets/qrcode.png"


function Pagamento() {
    return (
        <div className="container">
            <Navbar />
            <div className="container-doacao">
                <div className="container-code">
                    <img className="code-img" src={QrCode}/>
                </div>
            </div>
        </div>
    );
}


export default Pagamento;
