import { api, opcoesFetch } from './config'

const listarClientes = () => 
  fetch('http://localhost:4000', opcoesFetch('{ clientes { nome cpf } }'))
  .then(resposta => resposta.json())
  .then(dados => dados.data.clientes)
  // api
  //   .get('/clientes')
  //   .then(resposta => resposta.data)

const buscarClientePorId = id => 
  api
    .get(`/clientes/cliente/${id}`)
    .then(resposta => resposta.data[0])

const adicionarCliente = cliente => 
  fetch('http://localhost:4000', opcoesFetch(`
    mutation {
      adicionarCliente(nome: "${cliente.nome}", cpf: "${cliente.cpf}") {
        id
        nome
      }
    }
  `))
  .then(resposta => resposta.json())
  .then(dados => dados.data.cliente)

  // api
  //   .post('/clientes/cliente', cliente)
  //   .then(resposta => resposta.data)

const alterarCliente = (id, cliente) =>
  api
    .put(`/clientes/cliente/${id}`, cliente)
    .then(resposta => resposta.data)

const removerCliente = id => 
  api
    .delete(`/clientes/cliente/${id}`)
    .then(resposta => resposta.data)

export default {
  listarClientes,
  buscarClientePorId,
  adicionarCliente,
  alterarCliente,
  removerCliente
}