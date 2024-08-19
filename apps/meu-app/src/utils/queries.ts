import { gql } from '@apollo/client';

export const GET_DATA_MEMBROS = gql`
  query {
  getMembros {
    nome
    email
    dataDeEntrada
  }
}
`;

export const GET_DATA_POSTAGENS = gql`
query {
  getPostagem {
      titulo
      conteudo
    	autor
      data
    }
}
`;