import React from 'react'
import '../../estilos/sideBar.css'
import {BsListUl,BsSearch,BsPlusCircle,BsXCircle} from "react-icons/bs";
import {Link} from 'react-router-dom'
export default class Sidebar extends React.Component{

    renderIcone(obj){
        switch (obj) {
            case 'BsListUl':
                return <BsListUl className='icon'/>
            case 'BsSearch':
                return <BsSearch className='icon'/>
            case 'BsPlusCircle':
                return <BsPlusCircle className='icon'/>
            case 'BsXCircle':
                return <BsXCircle className='icon'/>
            default :
            break;
        }
    }

    evento(title){
        switch (title) {
            case 'Listar Usuários':
                return this.props.get()
            default:
                break;
        }
    }

    renderButton(){
        const list = this.props.data.map(obj =>(
            <div key={obj.title} id='conteudoList'>
                <Link to={'/entrar/' + obj.title}>
                    <button key={obj.title} id='bt' onClick={()=>this.evento(obj.title)}>{obj.title}</button>
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