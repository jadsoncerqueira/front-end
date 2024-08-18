import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CardMembros } from '@front-end/ui';

const MEMBROS = [
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "dataDeEntrada": "2023-01-10"
  },
  {
    "id": 2,
    "nome": "Maria Oliveira",
    "email": "maria.oliveira@example.com",
    "dataDeEntrada": "2023-02-15"
  },
  {
    "id": 3,
    "nome": "Carlos Souza",
    "email": "carlos.souza@example.com",
    "dataDeEntrada": "2023-03-20"
  }
]


export default function Membros() {
  return (
    <View style={styles.container}>
      <FlatList
        data={MEMBROS}
        renderItem={({item}) => <CardMembros {...item}/>}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    padding: 20,
    paddingTop: 100,
    justifyContent: 'center',
  },
});