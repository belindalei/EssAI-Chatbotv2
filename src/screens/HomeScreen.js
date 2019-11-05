import React from 'react';
import {Button, View, Text} from 'react-native';
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
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Welcome {this.props.user.email}!</Text>
        <Button
          title="Chat with Sally"
          onPress={() => this.props.navigation.navigate('ChatBotScreen')}
        />

        <Button
          title="Essay"
          onPress={() => this.props.navigation.navigate('EssayScreen')}
        />

        <Button
          title="Export Essay"
          onPress={() => this.props.navigation.navigate('ExportScreen')}
        />
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
