import React from 'react';
import {StyleSheet, TextInput, Text, View, Button, Image} from 'react-native';
import {connect} from 'react-redux';
import {userLogin} from '../../app/Actions/auth';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleEmailChange = email => {
    this.setState({email});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  onLogin = async () => {
    const {email, password} = this.state;
    try {
      if (email.length > 0 && password.length > 0) {
        this.props.userLogin({email, password});
        this.props.navigation.navigate('App');
      }
    } catch (error) {
      alert(error);
    }
  };

  goToSignup = () => this.props.navigation.navigate('Signup');

  render() {
    const {email, password} = this.state;

    return (
      <View style={styles.container}>
        <Image
          style={{flex: 11, height: 355, width: 355}}
          resizeMode="contain"
          source={require('../assets/images/EssAI.png')}
        />
        <Button title="Login" onPress={this.onLogin} />
        <View style={{margin: 10}}>
          <TextInput
            style={styles.input}
            name="email"
            value={email}
            placeholder="Enter email"
            onChangeText={this.handleEmailChange}
          />
        </View>
        <View style={{margin: 10}}>
          <TextInput
            style={styles.input}
            name="password"
            value={password}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
        </View>
        <Button title="Go to Signup" onPress={this.goToSignup} />
      </View>
    );
  }
}

const mdp = dispatch => {
  return {
    userLogin: data => dispatch(userLogin(data)),
  };
};

export default connect(
  null,
  mdp,
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    padding: 10,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    margin: 15,
    height: 40,
  },
});
