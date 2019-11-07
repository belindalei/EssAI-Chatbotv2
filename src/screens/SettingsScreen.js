import React from 'react';
import {Button, View, Image} from 'react-native';
import SettingsList from 'react-native-settings-list';
import {connect} from 'react-redux';

class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {switchValue: false};
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{flex: 1, marginTop: 50}}>
          <Image
            style={{alignSelf: 'center', height: 100, width: 100, margin: 10}}
            source={require('../assets/images/settings.png')}
          />
          <SettingsList>
            <SettingsList.Item
              hasNavArrow={false}
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasSwitch={true}
              title="Push Notifications"
            />
            <SettingsList.Header
              headerText="MY ACCOUNT"
              headerStyle={{color: 'black', marginTop: 50, fontWeight: 'bold'}}
            />
            <SettingsList.Item
              titleInfo={this.props.user.email}
              hasNavArrow={false}
              title="Email"
            />
            <SettingsList.Item title="Color Scheme" />
            <SettingsList.Item title="Switch Bots" />
            <SettingsList.Header
              headerText="ABOUT"
              headerStyle={{color: 'black', marginTop: 50, fontWeight: 'bold'}}
            />
            <SettingsList.Item title="Terms" />
            <SettingsList.Item title="About EssAI" />
            <SettingsList.Item title="Privacy" />
            <SettingsList.Item title="Contact" />
          </SettingsList>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Return to home"
            style={{margin: 20}}
          />
        </View>
      </View>
    );
  }

  onValueChange(value) {
    this.setState({switchValue: value});
  }
}

function msp(state) {
  return {
    user: state.auth.user,
  };
}

export default connect(msp)(SettingsScreen);
