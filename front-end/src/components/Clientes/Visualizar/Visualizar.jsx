import React from 'react'
import clientesApi from '../../../api/clientes'

class Visualizar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: '',
      cpf: ''
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    clientesApi.buscarClientePorId(id)
      .then(cliente => this.setState({ nome: cliente.nome, cpf: cliente.cpf }))
  }

  render() {
    return (
      <div>
        <h1>Visualizar Cliente</h1>

        <p>Nome: {this.state.nome}</p>
        <p>CPF: {this.state.cpf}</p>
       </div>
    )
  }
}

export default Visualizar