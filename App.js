import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView, Image } from 'react-native';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      people: []
    }
  }

  fetch() {
    axios
      .get('https://swapi.dev/api/people')
      .then(res =>
        this.setState({ people: res.data.results })
      )
  }

  componentDidMount() {
    console.log('Component Did Mount')
    this.fetch()
  }

  render() { 
    console.log(this.state.people)
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black'
      },
      item: {
        backgroundColor: 'yellow',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
        borderColor: 'white',
        borderStyle: 'solid'
      },
      title: {
        fontSize: 26,
        color: "black"
      },
      imageTitle: {
        width: 250,
        height: 150,
        marginLeft: 65
      },
      titleText: {
        color: 'yellow',
        marginLeft: 35,
        fontSize: 35,
        marginBottom: 25
      }
    });
    
    const renderItem = ({ item }) => (
      <Item title={item.name} />
    );

    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
    return (  
      <SafeAreaView style={styles.container}>
        <View>
          <Image 
            style={styles.imageTitle}
            source={require('./starwars.png')}
          />
          <Text style={styles.titleText}>Starwars Characters</Text>
        </View>
        <ScrollView>
          <FlatList
            data={this.state.people}
            renderItem={renderItem}
            keyExtractor={(item, index) => String(index)}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
 
export default App;