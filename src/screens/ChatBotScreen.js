import React, {Component} from 'react';
import {View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import {dialogflowConfig} from '../../env';
import {connect} from 'react-redux';
import {URL} from '../../app/Constants/actionCreator';

const BOT_USER = {
  _id: 2,
  name: 'FAQ Bot',
  avatar:
    'https://cdn4.iconfinder.com/data/icons/humans-sketches/100/Girl_channel-512.png',
};

class ChatBotScreen extends Component {
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

  state = {
    user: {},
    responses: [],
    messages: [
      {
        _id: 1,
        text: `Hi ${this.props.user.name}! I am Sally bot from EssAI.\n\nIf you'd like to save any of your responses at any moment in our conversation, please put an asterick (*) at some point in your response. \n\nTo exit, type "Exit."`,
        createdAt: new Date(),
        user: BOT_USER,
      },
    ],
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  //make a new essay first and then makes a new response for it
  createEssay = message => {
    fetch(`${URL}/essays`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        title: this.props.user.email,
      }),
    })
      .then(response => response.json())
      .then(essayResponse => this.postResponse(essayResponse, message));
  };

  postResponse = (essayResponse, message) => {
    if (message.includes('*')) {
      fetch(`${URL}/responses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          paragraph: message,
          user_id: this.props.user.id,
          essay_id: essayResponse.essay.id,
          saved: true,
        }),
      }).then(response => response.json());
    } else {
      fetch(`${URL}/responses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          paragraph: message,
          user_id: this.props.user.id,
          essay_id: essayResponse.essay.id,
          saved: false,
        }),
      }).then(response => response.json());
    }
  };

  onSend(messages = []) {
    let message = messages[0].text;

    //if user types in exit return to the home screen
    if (message.toUpperCase() === 'EXIT') {
      this.props.navigation.navigate('Home');
    } else {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
        //collects the response that the user is inputting
        responses: [...previousState.responses, message],
      }));
      //creates a new essay and saves the response to the user
      this.createEssay(message);
      Dialogflow_V2.requestQuery(
        message,
        result => this.handleGoogleResponse(result),
        error => console.log(error),
      );
    }
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER,
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg]),
    }));
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    );
  }
}

const msp = state => {
  return {
    user: state.auth.user,
  };
};

const mdp = dispatch => {
  return {
    responses: data => dispatch(fetchResponses(data)),
  };
};

export default connect(
  msp,
  mdp,
)(ChatBotScreen);
