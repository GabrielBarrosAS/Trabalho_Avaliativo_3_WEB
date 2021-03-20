import React from 'react'
import css from '../../estilos/Cadastro.css'
export default class Cadastro extends React.Component{
    render(){
        return(
            <div id='cadastro'>
                <link rel="stylesheet" href={css}/>
                <h1>CADASTRO</h1>
                <div id='campos'>
                    <div id='cadastroEsq'>
                        <label id='labelNome'>Nome do usuário</label>
                        <input type="text" id='nome'/>
                        <label id='labelEmail'>Email</label>
                        <input type="email" id='email'/>
                        <label id='labelDataNascimento'>Data de nascimento</label>
                        <input type="date" name="" id="dataNascimento"/>
                        <label id='numCasa'>Número</label>
                        <input type="number" id='numCasa'/>
                    </div>
                    <div id='cadastroDir'>
                        <label id='labelSenha'>Senha</label>
                        <input type="password" id="senhaCadastro"/>
                        <label id='labelCPF'>CPF</label>
                        <input type="text" id="cpf"/>
                        <label id='labelEndereco'>Endereco</label>
                        <input type="text" name="" id="endereco"/>
                        <label id='labelcomplemento'>Complemento (Opcional)</label>
                        <input type="text" id='complemento'/>
                    </div>
                </div>
            </div>
        )
    }
}