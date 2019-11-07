import React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import axios from 'axios';
import Response from '../components/Response';
import {connect} from 'react-redux';
import {fetchResponses} from '../../app/Actions/responses';

class EssayScreen extends React.Component {
  componentDidMount() {
    axios
      .get('http://localhost:3000/api/v1/responses.json')
      .then(resp => {
        //filters responses by current user
        const filteredByUser = resp.data.filter(
          response => response.user_id === this.props.user.id,
        );
        //filter user responses by ones that need saving w/ astericks
        let savedResponses = filteredByUser.filter(response =>
          response.paragraph.includes('*'),
        );

        //filter out the astericks
        let filteredResponses = [];
        savedResponses.forEach(respObj => {
          let newParagraph = respObj.paragraph.replace(/\*/g, '');
          respObj.paragraph = newParagraph;
          filteredResponses.push(respObj);
        });

        //set the filtered responses to global state
        this.props.fetchResponses(filteredResponses);
      })
      .catch(error => console.log(error));
  }

  renderResponse = () => {
    console.log('this.props.responses', this.props.responses);
    return this.props.responses.map(response => {
      return (
        <Text key={response.id}>
          <Response response={response} />
        </Text>
      );
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10,
        }}>
        {this.renderResponse()}
        <Button
          onPress={() => this.props.navigation.navigate('ChatBotScreen')}
          title="Chat with Sally some more!"
        />
      </View>
    );
  }
}

//reading
const msp = state => {
  return {
    responses: state.response.responses,
    user: state.auth.user,
  };
};

//writing
const mdp = dispatch => {
  return {
    fetchResponses: data => dispatch(fetchResponses(data)),
  };
};

export default connect(
  msp,
  mdp,
)(EssayScreen);
