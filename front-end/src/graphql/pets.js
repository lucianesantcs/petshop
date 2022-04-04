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
