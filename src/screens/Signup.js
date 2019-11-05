import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  Button,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {userSignUp} from '../../app/Actions/auth';

class Signup extends React.Component {
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

  onSignup = async () => {
    const {email, password} = this.state;
    try {
      if (email.length > 0 && password.length > 0) {
        console.log('user:', this.props.user);
        this.props.navigation.navigate('App');
      }
    } catch (error) {
      alert(error);
    }
  };

  goToLogin = () => this.props.navigation.navigate('Login');

  render() {
    const {email, password} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={{flex: 11, height: 355, width: 355}}
          resizeMode="contain"
          source={require('../assets/images/EssAI.png')}
        />
        <Button title="Sign Up" onPress={this.onSignup} />
        <View style={{margin: 10}}>
          <TextInput
            style={styles.input}
            name="email"
            value={email}
            placeholder="Enter email"
            autoCapitalize="none"
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
        <Button title="Go to Login" onPress={this.goToLogin} />
      </SafeAreaView>
    );
  }
}

const mdp = dispatch => {
  return {
    userSignUp: data => dispatch(userSignUp(data)),
  };
};

export default connect(
  null,
  mdp,
)(Signup);

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
