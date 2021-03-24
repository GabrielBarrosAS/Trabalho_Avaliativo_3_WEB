import React from 'react'
import './estilos.css'
import { BiSortDown } from "react-icons/bi";

export default class Sidebar extends React.Component{
    constructor(props){
        super(props)
    }

    renderButton(){
        const list = this.props.data.map(obj =>(
            <button key={obj.title} id='bt'>{obj.title}</button>
        ));
        return list
    }

    render(){
        return(
            <div id='containerReturn'>

                <header id='header'>USUÁRIO ADMNISTRADOR</header>

                <div id='conteudo'>CONTEUDO</div>
                
                <div id='principal'>
                    <div id='SidebarEsq' class="bar">
                        <div id='icone'>
                            <BiSortDown className='icon' ></BiSortDown>
                        </div>
                        <div id='list'>
                        {this.renderButton()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}