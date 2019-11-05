import React from 'react';
import {StyleSheet, TextInput, View, SafeAreaView, Button} from 'react-native';
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
});
