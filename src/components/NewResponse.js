import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';

class NewResponse extends Component {
  state = {
    response: '',
  };

  componentDidMount() {
    console.log('props', this.props);
    this.setState({response: this.props.response});
  }

  render() {
    console.log('HELLO');
    return (
      <TextInput
        multiline={true}
        numberOfLines={500}
        onChangeText={response => this.setState({response})}
        value={this.state.response}
      />
    );
  }
}

export default NewResponse;
