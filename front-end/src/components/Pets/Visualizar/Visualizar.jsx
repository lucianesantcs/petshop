import React from 'react'
import petsApi from '../../../api/pets'

class Visualizar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: '',
      dono: '',
      tipo: '',
      observacoes: ''
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    petsApi.buscarPetPorId(id)
      .then(pet => this.setState({
        nome: pet.nome,
        tipo: pet.tipo,
        dono: pet.donoId,
        observacoes: pet.observacoes
      }))
  }

  render() {
    return (
      <div>
        <h1>Visualizar Pet</h1>

        <p>Nome: {this.state.nome}</p>
        <p>Tipo: {this.state.tipo}</p>
        <p>Dono: {this.state.dono}</p>
        <p>Observações: {this.state.observacoes}</p>
       </div>
    )
  }
}

export default Visualizar