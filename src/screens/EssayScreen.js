import React from 'react';
import {Button, View, Text} from 'react-native';
import axios from 'axios';
import Response from '../components/Response';

class EssayScreen extends React.Component {
  state = {
    responses: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/v1/responses.json')
      .then(resp => {
        this.setState({responses: resp.data});
      })
      .catch(error => console.log(error));
  }

  renderResponse = () => {
    return this.state.responses.map(response => {
      return (
        <Text>
          <Response response={response} key={response.id} />
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

export default EssayScreen;
