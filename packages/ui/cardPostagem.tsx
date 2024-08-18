import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
  

type ItemProps = {titulo: string, conteudo: string, autor: string, data: string};

 export function formatarData(dataISO) {
  const data = new Date(dataISO);
  
  const meses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];
  const dia = data.getUTCDate();
  const mes = meses[data.getUTCMonth()];
  const ano = data.getUTCFullYear();
  return `${dia} de ${mes} de ${ano}`;
}
const CardPostagem = ({titulo, conteudo, autor, data}: ItemProps) => {
  return (
    <View style={styles.item}>
    <Text style={styles.title}>{titulo}</Text>
    <Text style={styles.conteudo}>{conteudo}</Text>
    <Text style={styles.autor}>{autor}</Text>
    <Text style={styles.data}>{formatarData(data)}</Text>
  </View>
)};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: 'white',
      padding: 10,
      width: "100%",
      marginVertical: 8,
    },
    title: {
      fontSize: 17,
      fontWeight: "bold"
    },
    conteudo: {
      fontSize: 13,
      color: "gray",
    },
    autor: {
      fontSize: 11,
      color: "gray",
      opacity: 0.7,
      fontWeight: "bold"
    },
    data: {
      fontSize: 9,
    }
  });
  
  export default CardPostagem;