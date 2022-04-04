import { api } from './config'

const listarPets = () => 
  api
    .get('/pets')
    .then(resposta => resposta.data)

const buscarPetPorId = id => 
  api
    .get(`/pets/pet/${id}`)
    .then(resposta => resposta.data[0])

const adicionarPet = pet => 
  api
    .post('/pets/pet', pet)
    .then(resposta => resposta.data)

const alterarPet = (id, pet) =>
  api
    .put(`/pets/pet/${id}`, pet)
    .then(resposta => resposta.data)

const removerPet = id => 
  api
    .delete(`/pets/pet/${id}`)
    .then(resposta => resposta.data)

export default {
  listarPets,
  buscarPetPorId,
  adicionarPet,
  alterarPet,
  removerPet
}