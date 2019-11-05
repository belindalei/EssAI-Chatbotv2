import React from 'react';
import {Button, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {sendEmail} from '../components/sendEmail';

class ExportScreen extends React.Component {
  exportFile = () => {
    alert('The essay has been sent to your email inbox!');
    //exports and emails file to yourself
    sendEmail('belinda.lei95@gmail.com', 'Can we get there?', 'TESTING').then(
      () => {
        console.log('Your message was successfully sent!');
      },
    );
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30}}>Export an essay</Text>
        <Button onPress={this.exportFile} title="Export" />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

export default ExportScreen;
