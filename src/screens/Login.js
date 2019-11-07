import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchUsers} from '../../app/Actions/auth';
import {userLogin} from '../../app/Actions/auth';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleEmailChange = email => {
    email = email.toLowerCase();
    this.setState({email});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  onLogin = async () => {
    const {email, password} = this.state;
    try {
      if (email.length > 0 && password.length > 0) {
        //if user email is found within the array of this.props.users, navigate to home screen
        const foundUser = this.props.users.find(
          user => user.email === this.state.email,
        );
        if (foundUser) {
          this.props.userLogin(foundUser);
          this.props.navigation.navigate('App');
        } else {
          alert('Invalid User');
        }
      }
    } catch (error) {
      alert('Invalid Input');
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
        <Button title="Go to Signup" onPress={this.goToSignup} />
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
        <TouchableOpacity onPress={this.onLogin}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchUsers: data => dispatch(fetchUsers(data)),
    userLogin: data => dispatch(userLogin(data)),
  };
};

function msp(state) {
  return {
    users: state.auth.users,
    user: state.auth.user,
  };
}

export default connect(
  msp,
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
