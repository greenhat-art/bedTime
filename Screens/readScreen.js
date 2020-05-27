import React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';


const DATA = [
  {
    id: 'Lawrence wargrave',
    title: 'Soldier island',
  },
  {
    id: 'hp',
    title: ' The boy who lived',                                                            
      
  },
  {
    id: 'charles dickens',
    title: 'A tale of two cities',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class ReadStoryScreen extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                 <FlatList
                  data={DATA}
                  renderItem={({ item }) => <Item title={item.title} />}
                  keyExtractor={item => item.id}
                  />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },item: {
  
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});