import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {sendEmail} from '../components/sendEmail';

class ExportScreen extends React.Component {
  exportFile = () => {
    alert('The essay has been sent to your email inbox!');
    //exports and emails file to yourself
    sendEmail('belinda.lei95@gmail.com', 'Your EssAI!', 'TESTING').then(() => {
      console.log('Your message was successfully sent!');
    });
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.text1}>
          Hi {this.props.user.name}! Send your essay to yourself by clicking
          below...
        </Text>
        <Image
          style={{flex: 11, height: 300, width: 300}}
          resizeMode="contain"
          source={require('../assets/images/EssAIBot.png')}
        />
        <TouchableOpacity onPress={this.exportFile}>
          <Text style={styles.tile1}> Send now! </Text>
        </TouchableOpacity>
        <Text style={styles.text2}>EssAI will be sending the email to</Text>
        <Text style={{fontWeight: 'bold', margin: 10, fontSize: 18}}>
          {this.props.user.email}
        </Text>
      </View>
    );
  }
}

function msp(state) {
  return {
    user: state.auth.user,
  };
}

export default connect(msp)(ExportScreen);

const styles = StyleSheet.create({
  container: {
    width: 0,
    flexGrow: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    margin: 20,
    color: '#545454',
  },
  text2: {
    fontSize: 16,
    margin: 5,
    color: '#545454',
  },
  tile1: {
    width: 200,
    height: 90,
    margin: 10,
    backgroundColor: '#38b6ff',
    borderColor: 'white',
    borderWidth: 5,
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
});
