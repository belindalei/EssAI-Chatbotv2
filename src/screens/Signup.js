import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
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
        <Button title="Go to Login" onPress={this.goToLogin} />
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
        <TouchableOpacity onPress={this.onSignup}>
          <Text style={styles.button}>Sign up</Text>
        </TouchableOpacity>
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
    backgroundColor: '#38b6ff',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 15,
    textAlign: 'center',
  },
});
