import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { formatarData } from './cardPostagem';
  

type ItemProps = {nome: string, email: string, dataDeEntrada: string};

const CardMembros = ({nome, email, dataDeEntrada}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{nome}</Text>
    <Text style={styles.email}>{email}</Text>
    <Text style={styles.data}>Usuario desde {formatarData(dataDeEntrada)}</Text>
  </View>
);

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
    email: {
      fontSize: 13,
      color: "gray",
    },
    data: {
      fontSize: 9,
    },
  });
  
  export default CardMembros;