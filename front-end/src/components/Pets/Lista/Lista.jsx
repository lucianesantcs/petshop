import React from 'react'
import { Link } from 'react-router-dom'
import petsApi from '../../../api/pets'

class Pets extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    this.carregarPets()
  }
  
  deletarPet(id) {
    petsApi.removerPet(id)
      .then(() => this.carregarPets())
  }
  
  carregarPets() {
    petsApi.listarPets()
      .then(pets => this.setState({pets}))
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Pets</h1>

          <Link to="/pets/novo">Novo Pet </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Dono</th>
              <th>Observações</th>
              <th>Ações</th>
            </tr>
          </thead>
          
          <tbody>
            {
              this.state.pets.map(pet => (
                <tr>
                  <td>{pet.nome}</td>
                  <td>{pet.tipo}</td>
                  <td>{pet.donoId}</td>
                  <td>{pet.observacoes}</td>
                  <td>
                    <Link to={`pets/${pet.id}`}>visualizar</Link>
                    <Link to={`pets/alterar/${pet.id}`}>alterar</Link>
                    <button onClick={this.deletarPet.bind(this, pet.id)}>remover</button>
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

export default Pets