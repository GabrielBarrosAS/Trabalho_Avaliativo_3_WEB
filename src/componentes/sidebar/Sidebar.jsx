import React from 'react'
import '../../estilos/sideBar.css'
import {Link} from 'react-router-dom'

import {BsListUl,BsSearch,BsPlusCircle,BsXCircle} from "react-icons/bs";

export default class Sidebar extends React.Component{

    state = {
        evento: ''
    }

    renderIcone(obj){
        switch (obj) {
            case 'BsListUl':
                return <BsListUl className='icon'></BsListUl>
            case 'BsSearch':
                return <BsSearch className='icon'></BsSearch>
            case 'BsPlusCircle':
                return <BsPlusCircle className='icon'></BsPlusCircle>
            case 'BsXCircle':
                return <BsXCircle className='icon'></BsXCircle>
            default :
            break;
        }
    }

    renderButton(){
        const list = this.props.data.map(obj =>(
            <div key={obj.title} id='conteudoList'>
                <Link id='bt' to={'/entrar/'+obj.title}>
                    <button key={obj.title} id='bt'>{obj.title}</button>
                </Link>
                {this.renderIcone(obj.icone)}
            </div>
        ));
        return list
    }

    render(){
        return(
            <div id='containerReturn'>
                <div className='bar' id='SidebarEsq'>
                    <div className='List'>    
                        {this.renderButton()}
                    </div>
                </div>
                <div id='page'>
                    <div id='cabecalho'>TELA DO ADMINISTRADOR</div>
                    <div id='conteudo'>
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}