import gql from 'graphql-tag'

export const LISTAR_PETS = gql`
  query {
    pets {
      id
      nome
      tipo
      dono {
        id
        nome
      }
      observacoes
    }
  }
`

export const ADICIONAR_PET = gql`
  mutation adicionarPet($nome: String!, $donoId: Int!, $tipo: String!, $observacoes: String) {
    adicionarPet(nome: $nome, donoId: $donoId, tipo: $tipo, observacoes: $observacoes) {
      nome
    }
  }
`
