import React, {Component} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

class NewResponse extends Component {
  state = {
    id: null,
    response: '',
  };

  componentDidMount() {
    this.setState({
      response: this.props.response,
      id: this.props.id,
    });
  }

  handleSubmit = () => {
    this.props.setNewResponse(this.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          multiline={true}
          numberOfLines={500}
          onChangeText={response => this.setState({response})}
          value={this.state.response}
          id={this.props.response.id}
          style={{
            height: '100%',
            width: '100%',
            borderColor: '#38b6ff',
            borderWidth: 1,
            padding: 5,
            margin: 5,
          }}
        />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text style={styles.button}> Save Edit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NewResponse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    margin: 10,
  },
  button: {
    color: '#38b6ff',
    fontSize: 14,
    borderColor: '#38b6ff',
    borderWidth: 3,
    margin: 10,
  },
});
