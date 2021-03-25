import React from 'react'
import './estilos.css'
import { BiSortDown } from "react-icons/bi";
import {BsListUl,BsSearch,BsPlusCircle,BsXCircle} from "react-icons/bs";

export default class Sidebar extends React.Component{
    constructor(props){
        super(props)
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
        }
    }

    renderButton(){
        const list = this.props.data.map(obj =>(
            <div id='conteudoList'>
                <button key={obj.title} id='bt'>{obj.title}</button>
                {this.renderIcone(obj.icone)}
            </div>
        ));
        return list
    }

    renderContent(){
        const list = this.props.data.map(obj =>(
            <div id='itemContent'>
                <h1>{obj.title}</h1>
                <h2>{obj.link}</h2>
                <h2>{obj.icone}</h2>
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
                    <div id='cabecalho'>Header</div>
                    <div id='conteudo'>
                        {this.renderContent()}
                    </div>
                </div>
            </div>
        )
    }
}