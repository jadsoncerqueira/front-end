import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { CardPostagem } from "@front-end/ui";

const POSTAGENS = [
  {
    "id": 1,
    "titulo": "Primeira Postagem",
    "conteudo": "Este é o conteúdo da primeira postagem.",
    "autor": "João Silva",
    "data": "2024-08-18T12:00:00Z"
  },
  {
    "id": 2,
    "titulo": "Segunda Postagem",
    "conteudo": "Este é o conteúdo da segunda postagem.",
    "autor": "Maria Oliveira",
    "data": "2024-08-17T15:30:00Z"
  },
  {
    "id": 3,
    "titulo": "Terceira Postagem",
    "conteudo": "Este é o conteúdo da terceira postagem.",
    "autor": "Carlos Souza",
    "data": "2024-08-16T09:45:00Z"
  }
]

export default function Postagens() {
  return (
    <View style={styles.container}>
        <FlatList
          data={POSTAGENS}
          renderItem={({item}) => <CardPostagem {...item} />}
          keyExtractor={(item) => item.id.toString()}
        />
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