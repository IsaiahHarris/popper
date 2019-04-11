import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Header from './Components/Header';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
        <View>
          <Header />
        </View>
      </View>
    );
  }
}

export default App;
