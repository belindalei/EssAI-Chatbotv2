import React from 'react';
import {StyleSheet, Button, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'EssAI Home',
      headerStyle: {
        backgroundColor: '#1CB0F6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

      headerRight: () => (
        <Button
          onPress={() => {
            alert('You have successfully logged out!');
            navigation.navigate('Login');
          }}
          title="Logout"
          color="#fff"
        />
      ),

      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate('SettingsScreen')}
          title="Settings"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Welcome {this.props.user.email}!</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ChatBotScreen')}>
          <Text style={styles.tile1}> Chat with Sally </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('EssayScreen')}>
          <Text style={styles.tile2}> View Essay </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ExportScreen')}>
          <Text style={styles.tile3}> Export Essay </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function msp(state) {
  return {
    user: state.auth.user,
  };
}

export default connect(msp)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    width: 274,
    height: 86,
    color: '#121212',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tile1: {
    width: 500,
    height: 100,
    margin: 10,
    backgroundColor: 'white',
    borderColor: '#d33131',
    borderWidth: 5,
    // borderRadius: 10,
    // color: '#38b6ff',
    color: 'black',
    fontSize: 28,
    // fontWeight: 'bold',
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
  tile2: {
    width: 500,
    height: 100,
    margin: 15,
    backgroundColor: 'white',
    borderColor: '#7ac70c',
    borderWidth: 5,
    color: 'black',
    fontSize: 28,
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
  tile3: {
    width: 500,
    height: 100,
    margin: 15,
    backgroundColor: 'white',
    borderColor: '#faa918',
    borderWidth: 5,
    color: 'black',
    fontSize: 28,
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

// <ImageBackground
//   style={styles.background}
//   resizeMode="contain"
//   source={require('../assets/images/home.png')}>
// </ImageBackground>
