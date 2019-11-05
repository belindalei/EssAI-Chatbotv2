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
        //filteres responses by current user and sets responses to global state
        console.log('Current User ID:', this.props.user);
        const filteredResponses = resp.data.filter(
          response => response.user_id === this.props.user.id,
        );
        console.log('filtered responses:', filteredResponses);
        this.props.fetchResponses(filteredResponses);
      })
      .catch(error => console.log(error));
  }

  renderResponse = () => {
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
      <SafeAreaView>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            justifyContent: 'center',
            margin: 10,
            alignItems: 'center',
          }}>
          Welcome to your essay:
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
          }}>
          {this.renderResponse()}
          {/*<Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />*/}
        </View>
      </SafeAreaView>
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
