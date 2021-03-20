import React from 'react'
import css from '../estilos/TelaLogin.css'
import Cadastro from './TelasCadastro/Cadastro'
import {Link} from 'react-router-dom'
export default class Telalogin extends React.Component{
    
    render(){
        return(
            <div id='containerPrincipal'>
                <link rel="stylesheet" href={css}/>
                <div id='login'>    
                    <label>LOGIN:</label>
                    <input type="email" id="emailLogin"/>
                </div>
                <div id='senha'>
                    <label>SENHA:</label>
                    <input type="password"id="senhaLogin"/>
                </div>
                <div id='botoes'>
                    <button type="submit" id='entrar'>ENTRAR</button>
                    <Link to='/cadastro'>
                        <button type="submit" id='cadastrar'>CADASTRO</button>
                    </Link>
                </div>
            </div>
        )
    }
}
