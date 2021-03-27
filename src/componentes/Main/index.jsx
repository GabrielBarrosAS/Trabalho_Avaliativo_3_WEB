import React from 'react'
import api from '../service/api'
import '../../estilos/sideBar.css'
export default class Main extends React.Component{
    state = {
        encomendas:[],
        code: '0'
    }

    componentDidMount(){
        switch (this.props.code) {
            case '1':
                this.loadProducts()
                break;
            case '2':
                this.setState({encomendas: []})
                break;       
            case '3':
                this.createProduct(this.props.novo)
                this.loadProducts()
                break;     
            default:
                break;
        }
    }

    componentDidUpdate(){
        console.log(this.state.code)
        if(this.state.code !== this.props.code){    
            this.setState({code: this.props.code})
        }
        switch (this.state.code) {
            case '1':
                this.loadProducts()
                break;
            case '2':
                if(this.state.encomendas.length !== 0){
                    this.setState({encomendas: []})
                }
                break;
            case '3':
                this.createProduct(this.props.novo)
                this.loadProducts()
                this.setState({code: '0'})
                break;
            default:
                break;
        }
    }

    loadProducts = async () => {
        const response = await api.get('/encomendas')
        this.setState({encomendas: response.data})
    }

    createProduct = async (novo) => {
        const responde = await api.post('/encomendas/criar',novo)
        this.loadProducts()
    }

    computeContent(){
        const list = []
        this.state.encomendas.map(encomenda =>(
            list.push(
            <div className='itemContent' key={encomenda._id}>
                {encomenda._id}
                <br/>
                {encomenda.clientes[0].nome}
                <br/>
                {encomenda.clientes[1].nome}
            </div>
            )
        ))
        return list
    }

    render(){
        return this.computeContent()
    }
}

