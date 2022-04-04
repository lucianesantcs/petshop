import React from 'react'
import { Link } from 'react-router-dom'
import clientesApi from '../../../api/clientes'

class Clientes extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clientes: []
    }
  }

  componentDidMount() {
    this.carregarClientes()
  }
  
  deletarCliente(id) {
    clientesApi.removerCliente(id)
      .then(() => this.carregarClientes())
  }
  
  carregarClientes() {
    clientesApi.listarClientes()
      .then(clientes => this.setState({clientes}))
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Clientes</h1>

          <Link to="/clientes/novo">Novo Cliente </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Ações</th>
            </tr>
          </thead>
          
          <tbody>
            {
              this.state.clientes.map(cliente => (
                <tr>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>
                    <Link to={`clientes/${cliente.id}`}>visualizar</Link>
                    <Link to={`clientes/alterar/${cliente.id}`}>alterar</Link>
                    <button onClick={this.deletarCliente.bind(this, cliente.id)}>remover</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Clientes