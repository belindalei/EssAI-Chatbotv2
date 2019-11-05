import React from 'react';
import {Button, View, Text} from 'react-native';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30}}>Settings</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Return to home"
        />
      </View>
    );
  }
}

export default SettingsScreen;
