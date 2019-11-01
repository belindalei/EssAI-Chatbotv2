import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import {dialogflowConfig} from '../../env';

const BOT_USER = {
  _id: 2,
  name: 'FAQ Bot',
  avatar:
    'https://cdn4.iconfinder.com/data/icons/humans-sketches/100/Girl_channel-512.png',
};

class ChatBotScreen extends Component {
  state = {
    user: {},
    responses: [],
    messages: [
      {
        _id: 1,
        text: `Hi! I am Sally bot from EssAI.\n\nHow may I help you today?`,
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

  onSend(messages = []) {
    let message = messages[0].text;

    //if user types in exit return to the home screen
    if (message.toUpperCase() === 'EXIT') {
      compileResponses();
    } else {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),

        //collects the responses that the user is inputting
        responses: [...previousState.responses, message],
      }));
      Dialogflow_V2.requestQuery(
        message,
        result => this.handleGoogleResponse(result),
        error => console.log(error),
      );
    }
  }

  //compile responses to be sent to the essays
  compileResponses() {}

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

export default ChatBotScreen;
