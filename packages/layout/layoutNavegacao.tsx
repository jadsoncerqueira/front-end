import React from 'react';
import { Stack, Tabs } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native';


const LayoutNavegacao = () => (
  <Tabs screenOptions={{tabBarStyle: {position: Platform.OS === "web" ? "absolute" : "relative", top: 0}, headerShown: false}}>
    <Tabs.Screen name='index' options={{title: "Postagens"}}/>
    <Tabs.Screen name='membros' options={{title: "Membros"}}/>
  </Tabs>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  
  export default LayoutNavegacao;