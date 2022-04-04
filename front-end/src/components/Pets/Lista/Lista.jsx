import React from 'react'
import { Link } from 'react-router-dom'
import petsApi from '../../../api/pets'
import { Query } from 'react-apollo'
import { LISTAR_PETS } from '../../../graphql/pets'

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
              <th>Dono ID</th>
              <th>Dono Nome</th>
              <th>Observações</th>
              <th>Ações</th>
            </tr>
          </thead>
          
          <tbody>
            <Query query={ LISTAR_PETS }>
              {
                ({ data }) => {
                  const pets = data?.pets || []
                  return pets.map(pet => (
                    <tr>
                      <td>{pet.nome}</td>
                      <td>{pet.tipo}</td>
                      <td>{pet.dono.id}</td>
                      <td>{pet.dono.nome}</td>
                      <td>{pet.observacoes}</td>
                      <td>
                        <Link to={`pets/${pet.id}`}>visualizar</Link>
                        <Link to={`pets/alterar/${pet.id}`}>alterar</Link>
                        <button onClick={this.deletarPet.bind(this, pet.id)}>remover</button>
                      </td>
                    </tr>
                  ))
                }
              }
            </Query>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Pets