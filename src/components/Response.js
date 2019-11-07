import React, {Component} from 'react';
import {Text} from 'react-native';

class Response extends Component {
  state = {
    paragraph: [],
  };

  render() {
    return (
      <Text style={{fontSize: 17}} key={this.props.response.id}>
        {this.props.response.paragraph}
      </Text>
    );
  }
}

export default Response;
