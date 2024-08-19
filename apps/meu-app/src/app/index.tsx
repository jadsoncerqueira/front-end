import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { CardMembros } from '@front-end/ui';
import { useQuery } from '@apollo/client';
import { GET_DATA_MEMBROS } from '../utils/queries';

export default function Membros() {
  const { loading, error, data } = useQuery(GET_DATA_MEMBROS);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <View style={styles.container}>
      <FlatList
        data={data.getMembros}
        renderItem={({item}) => <CardMembros {...item}/>}
        keyExtractor={(item) => `${item.id}`}
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