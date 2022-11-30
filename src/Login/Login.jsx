import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import Logo from "../assets/takimundo-logo.png"

import "./Login.css";

function Cadastro() {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const verificaLogin = async () =>{
        const {data} = await axios.get(`http://localhost:3333/users/${name}/${password}`);
        if(data === 'User Exist') {
            localStorage.setItem('userName', JSON.stringify(name));
            navigate('Main')
        }
    }

    const handleChangeName = (e) => {
        setName((e.target.value).toLowerCase());
    };


    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };


    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">Bem vindo</span>

                        <span className="login-form-title">
                            <img src={Logo} alt="Projeto Takimundo"/>
                        </span>

                        <div className="wrap-input">
                            <input
                                className={name !== "" ? "has-val input" : "input"}
                                type="text"
                                onChange={(e) => handleChangeName(e)}
                            />
                            <span className="focus-input" data-placeholder="Nome"></span>
                        </div>
                        <div className="wrap-input">
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="password"
                                onChange={(e) => handleChangePassword(e)}
                            />
                            <span className="focus-input" data-placeholder="Senha"></span>
                        </div>
                        <div className="container-login-form-btn">
                            <button
                                className="login-form-btn"
                                onClick={(e) => {e.preventDefault(); verificaLogin()}}
                            >
                                ENTRAR
                            </button>
                        </div>
                        <div className="container-cadastro-route-btn">
                            <span className="cadastro-span">Não possuí conta ?
                                <button
                                    className="cadastro-route-btn"
                                    onClick={(e) => {e.preventDefault(); navigate('/Cadastro')}}
                                >
                                    Cadastre-se
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
