import { Route, BrowserRouter, Routes } from "react-router-dom";

import Main from "./Main/Main";
import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro";
import ONGS from "./ONGS/ongs";
import Pagamento from "./Pagamento/Pagamento";
import Sobre from "./Sobre/Sobre";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Main" element={<Main/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/Ongs" element={<ONGS/>}/>
                <Route path="/Pag" element={<Pagamento/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
