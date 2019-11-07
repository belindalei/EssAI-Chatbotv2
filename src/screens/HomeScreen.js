import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
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
        <Text style={styles.text1}>Welcome {this.props.user.name}!</Text>
        <Image
          style={{flex: 11, height: 300, width: 300}}
          resizeMode="contain"
          source={require('../assets/images/EssAIBot_v2.png')}
        />
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
    bottom: 20,
  },
  text1: {
    color: '#121212',
    margin: 40,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tile1: {
    width: 300,
    height: 80,
    margin: 2,
    backgroundColor: '#38b6ff',
    borderColor: 'white',
    borderWidth: 5,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
  tile2: {
    width: 300,
    height: 80,
    margin: 2,
    backgroundColor: '#38b6ff',
    borderColor: 'white',
    borderWidth: 5,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
  tile3: {
    width: 300,
    height: 80,
    margin: 2,
    backgroundColor: '#38b6ff',
    borderColor: 'white',
    borderWidth: 5,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
});
