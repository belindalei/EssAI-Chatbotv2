import React from 'react';
import {Button, View, Text} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

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
          onPress={() => alert('You have successfully logged out!')}
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

export default HomeScreen;
