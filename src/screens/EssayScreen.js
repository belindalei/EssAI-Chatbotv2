import React from 'react';
import {Button, View, Text} from 'react-native';
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
        const filteredResponses = resp.data.filter(
          response => response.user_id === this.props.user.id,
        );
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
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {this.renderResponse()}
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
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
