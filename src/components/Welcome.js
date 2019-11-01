'use strict';
import React, {Component} from 'react';
import {StyleSheet, TextInput, TouchableHighlight, AsyncStorage, ActivityIndicatorIOS, Text, View} from 'react-native';

const ACCESS_TOKEN = 'access_token';

class Register extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    password_confirmation: '',
    errors: [],
    showProgress: false,
  };

  onRegisterPressed = () => {

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }
      })
    }

    //need to switch to heroku or use local tunnel 
    fetch('http://localhost:3000/api/v1/users', options)
      .then(response => response.json())
      .then(data => {
        this.setState({})
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput>
          onChangeText={val => this.setState({email: val})}
          style={styles.input}
          placeholder="Email"
        </TextInput>
        <TextInput
          onChangeText={text => this.setState({name: text})}
          style={styles.input}
          placeholder="Name"></TextInput>
        <TextInput
          onChangeText={text => this.setState({password: text})}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}></TextInput>
        <TextInput
          onChangeText={text => this.setState({password_confirmation: text})}
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}></TextInput>
        <TouchableHighlight
          onPress={this.onRegisterPressed}
          style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80,
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 30,
  },
  error: {
    color: 'red',
    paddingTop: 10,
  },
  loader: {
    marginTop: 20,
  },
});

export default Register;