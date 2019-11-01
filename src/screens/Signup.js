import React from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

export default class Signup extends React.Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
  };

  handleEmailChange = email => {
    this.setState({email});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  onSignup = async () => {
    const {email, password} = this.state;
    try {
      if (email.length > 0 && password.length > 0) {
        this.props.navigation.navigate('App');
      }
    } catch (error) {
      alert(error);
    }
  };

  goToLogin = () => this.props.navigation.navigate('Login');

  render() {
    const {name, username, email, password} = this.state;

    return (
      <View style={styles.container}>
        <View style={{margin: 10}}>
          <TextInput
            name="username"
            value={username}
            placeholder="Enter username"
            autoCapitalize="none"
            onChangeText={this.handleEmailChange}
          />
        </View>
        <View style={{margin: 10}}>
          <TextInput
            name="name"
            value={name}
            placeholder="Enter name"
            autoCapitalize="none"
            onChangeText={this.handleEmailChange}
          />
        </View>
        <View style={{margin: 10}}>
          <TextInput
            name="email"
            value={email}
            placeholder="Enter email"
            autoCapitalize="none"
            onChangeText={this.handleEmailChange}
          />
        </View>
        <View style={{margin: 10}}>
          <TextInput
            name="password"
            value={password}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
        </View>
        <Button title="Sign Up" onPress={this.onSignup} />
        <Button title="Go to Login" onPress={this.goToLogin} />
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
  },
});
