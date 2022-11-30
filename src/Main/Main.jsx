import React, { useState } from "react";
import axios from "axios";
import { IoPersonCircle } from "react-icons/io5";
import Navbar from "../Navbar/Navbar";


import "./Main.css";

function Main() {
    const [tema, setTema] = useState();
    const [userName1, setUserName1] = useState();
    const [userName2, setUserName2] = useState();
    const [userName3, setUserName3] = useState();
    const [userName4, setUserName4] = useState();
    const [userName5, setUserName5] = useState();
    const [userName6, setUserName6] = useState();
    const [userName7, setUserName7] = useState();
    const [comentario1, setComentario1] = useState();
    const [comentario2, setComentario2] = useState();
    const [comentario3, setComentario3] = useState();
    const [comentario4, setComentario4] = useState();
    const [comentario5, setComentario5] = useState();
    const [comentario6, setComentario6] = useState();
    const [comentario7, setComentario7] = useState();
    let comentarios;
    var idTema;

    const [conteudo, setConteudo] = useState();

    const getComents = async (id) => {
        const {data} = await axios.get(`http://localhost:3333/comments/${id}`)

        comentarios = data
        getUserNameConteudo()
    }

    const getUserNameConteudo = () => {
        const qtdComentarios = comentarios.length;

        setUserName1(comentarios[qtdComentarios-1].userName);
        setUserName2(comentarios[qtdComentarios-2].userName);
        setUserName3(comentarios[qtdComentarios-3].userName);
        setUserName4(comentarios[qtdComentarios-4].userName);
        setUserName5(comentarios[qtdComentarios-5].userName);
        setUserName6(comentarios[qtdComentarios-6].userName);
        setUserName7(comentarios[qtdComentarios-7].userName);
        setComentario1(comentarios[qtdComentarios-1].conteudo);
        setComentario2(comentarios[qtdComentarios-2].conteudo);
        setComentario3(comentarios[qtdComentarios-3].conteudo);
        setComentario4(comentarios[qtdComentarios-4].conteudo);
        setComentario5(comentarios[qtdComentarios-5].conteudo);
        setComentario6(comentarios[qtdComentarios-6].conteudo);
        setComentario7(comentarios[qtdComentarios-7].conteudo);
    }

    const getTema = async (id) => {
        const {data} = await axios.get(`http://localhost:3333/tema/${id}`);

        setTema((data.name).replace(/"/g, ''));
        idTema = id
        getComents(id)
    }

    const getComentario = async () => {
        const userName = localStorage.getItem('userName');
        console.log(conteudo, idTema)
        const{data} = await axios.post('http://localhost:3333/comments', {
            conteudo: conteudo,
            userName: (userName.replace(/"/g, '')).toUpperCase(),
            idTema: Number(idTema)
        })

        console.log(data)

        getTema(idTema)
    }

    const handleChangeConteudo = (e) => {
        setConteudo(e.target.value)
    }

    return (
        <div className="main">
            <Navbar />
            <div className="container-conteudo-main">
                <div className="column">
                    <div className="painel">
                        <div className="painel-header">
                            <h4>Temas em discussão</h4>
                        </div>
                        <div className="painel-body">
                            <div className="list-group">
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(1)}}><h6>Erradicação da pobreza</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(2)}}><h6>Fome zero e agricultura sustentável</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(3)}}><h6>Saúde e bem-estar</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(4)}}><h6>Educação de qualidade</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(5)}}><h6>Igualdade de Gênero</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(6)}}><h6>Água potável e saneamento</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(7)}}><h6>Energia limpa e acessível</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(8)}}><h6>Trabalho decente e crescimento econômico</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(9)}}><h6>Indústria, inovação e infraestrutura</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(10)}}><h6>Redução das desigualdades</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(11)}}><h6>Cidades e comunidades sustentáveis</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(12)}}><h6>Consumo e produção responsáveis</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(13)}}><h6>Ação contra a mudança global do clima</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(14)}}><h6>Vida na água</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(15)}}><h6>Vida terrestre</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(16)}}><h6>Paz, justiça e instituições eficazes</h6></button>
                                <button className="list-group-item" onClick={(e) => {e.preventDefault(); getTema(17)}}><h6>Parcerias e meios de implementação</h6></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="painel">
                        <div className="painel-header">
                            <h4>Comentários</h4>
                            <h4 className="tema">{tema}</h4>
                        </div>
                        <div className="painel-body">
                            <div className="list-group list-comments">
                                <div className="comment-container">
                                    <IoPersonCircle className="icon-user"/>
                                    <div className="comment">
                                        <h1 className="userName">{userName1}</h1>
                                        <h1 className="comment-cont">{comentario1}</h1>
                                    </div>
                                </div>
                                <div className="comment-container">
                                    <IoPersonCircle className="icon-user"/>
                                    <div className="comment">
                                        <h1 className="userName">{userName2}</h1>
                                        <h1 className="comment-cont">{comentario2}</h1>
                                    </div>
                                </div>
                                <div className="comment-container">
                                    <IoPersonCircle className="icon-user"/>
                                    <div className="comment">
                                        <h1 className="userName">{userName3}</h1>
                                        <h1 className="comment-cont">{comentario3}</h1>
                                    </div>
                                </div>
                                <div className="comment-container">
                                    <IoPersonCircle className="icon-user"/>
                                    <div className="comment">
                                        <h1 className="userName">{userName4}</h1>
                                        <h1 className="comment-cont">{comentario4}</h1>
                                    </div>
                                </div>
                                <div className="comment-container">
                                    <IoPersonCircle className="icon-user"/>
                                    <div className="comment">
                                        <h1 className="userName">{userName5}</h1>
                                        <h1 className="comment-cont">{comentario5}</h1>
                                    </div>
                                </div>
                                <div className="comment-container">
                                    <IoPersonCircle className="icon-user"/>
                                    <div className="comment">
                                        <h1 className="userName">{userName6}</h1>
                                        <h1 className="comment-cont">{comentario6}</h1>
                                    </div>
                                </div>
                                <div className="comment-container">
                                    <IoPersonCircle className="icon-user"/>
                                    <div className="comment">
                                        <h1 className="userName">{userName7}</h1>
                                        <h1 className="comment-cont">{comentario7}</h1>
                                    </div>
                                </div>
                                <div className="comentar-container">
                                    <input
                                    className="input-comentar"
                                    placeholder="Comentar..."
                                    onChange={(e) => {handleChangeConteudo(e)}}
                                    />
                                    <button
                                        className="btn-comentar"
                                        onClick={(e) => {e.preventDefault(); getComentario()}}
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Main;
