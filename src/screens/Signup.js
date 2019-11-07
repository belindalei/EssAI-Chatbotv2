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
    name: '',
    email: '',
    password: '',
  };

  handleNameChange = name => {
    this.setState({name});
  };

  handleEmailChange = email => {
    email = email.toLowerCase();
    this.setState({email});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  onSignup = async () => {
    const {email, password, name} = this.state;
    try {
      if (email.length > 0 && password.length > 5) {
        if (this.props.users.find(user => user.email === email)) {
          alert('This user has already been taken');
        } else {
          this.props.userSignUp({email, password, name});
          this.props.navigation.navigate('App');
        }
      } else {
        alert('Password must be 6 characters long');
      }
    } catch (error) {
      alert(error);
    }
  };

  goToLogin = () => this.props.navigation.navigate('Login');

  render() {
    const {email, password, name} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={{flex: 11, height: 375, width: 375}}
          resizeMode="contain"
          source={require('../assets/images/EssAI.png')}
        />
        <Button title="Go to Login" onPress={this.goToLogin} />
        <View style={{margin: 10}}>
          <TextInput
            style={styles.input}
            name="name"
            value={name}
            placeholder="Enter name"
            autoCapitalize="none"
            onChangeText={this.handleNameChange}
          />
        </View>
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

function msp(state) {
  return {
    users: state.auth.users,
  };
}

export default connect(
  msp,
  mdp,
)(Signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
  },
  input: {
    margin: 2,
    padding: 10,
    height: 40,
    width: 300,
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
