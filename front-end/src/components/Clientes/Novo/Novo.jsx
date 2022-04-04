import React from 'react'
import clientesApi from '../../../api/clientes'
import clientes from '../../../api/clientes';

class Novo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: '',
      cpf: ''
    }

    this.gerenciarMudancas = this.gerenciarMudancas.bind(this)
    this.gerenciarEnvio = this.gerenciarEnvio.bind(this)
  }

  gerenciarMudancas(evento) {
    const chave = evento.target.name
    const valor = evento.target.value
    this.setState({ [chave]: valor })
  }

  gerenciarEnvio(evento) {
    evento.preventDefault()
    
    clientesApi.adicionarCliente(this.state)
    this.props.history.push('/clientes')
  }

  render() {
    return (
      <div>
        <h1>Novo Cliente</h1>

        <form onSubmit={this.gerenciarEnvio}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" value={this.state.nome} onChange={this.gerenciarMudancas} />
          </div>
          <div>
            <label htmlFor="cpf">CPF</label>
            <input type="text" name="cpf" id="cpf" value={this.state.cpf} onChange={this.gerenciarMudancas} />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default Novo