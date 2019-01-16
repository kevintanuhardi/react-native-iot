/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import firebase from './helpers/firebase'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state ={
    IoTBoolean: false
  }

  componentDidMount(){
    this.fetchFirebaseState()
  }

  fetchFirebaseState = () =>{
    const self = this
    firebase.ref('coba').on('value', function(snapshot){
      const IoTBoolean = snapshot.val().value

      self.setState({
        ...self.state,
        IoTBoolean
      })
    })
  }

  toggleState = () =>{
    const IoTBoolean = !this.state.IoTBoolean
    firebase.ref('coba/value').set(IoTBoolean)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>{String(this.state.IoTBoolean)}</Text>
        <Button
          title="test"
          onPress={this.toggleState}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
