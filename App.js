import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import ListItem from './src/ListItem';

export default function App() {

  const tarefas = [
  {id: '1', tarefa: 'Comprar Mouse'},
  {id: '2', tarefa: 'Estudar JavaScript'},
  {id: '3', tarefa: 'Estudar ReactNative'},
  {id: '4', tarefa: 'Fazer prova especial para os alunos'},
  ];

  return (
    <View style={styles.container}>
     <FlatList
            data={tarefas}
            keyExtractor={item => item.id}
            renderItem={ ({item}) => (
                <ListItem
                data={item}
                />
             ) }
             />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
