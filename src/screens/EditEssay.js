import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {fetchResponses} from '../../app/Actions/responses';
import NewResponse from '../components/NewResponse';

class EditEssay extends React.Component {
  state = {
    isModalVisible: false,
    response: '',
  };

  componentDidMount() {
    this.setState({response: this.renderResponse()});
  }

  renderResponse = () => {
    return this.props.responses.map(response => {
      return (
        <NewResponse
          key={response.id}
          id={response.id}
          response={response.paragraph}
          setNewResponse={this.setNewResponse}
        />
      );
    });
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  handleDismiss = () => {
    //set some sort of timeout here
    // alert('Your essay has been updated!');
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  setNewResponse = newResponseObj => {
    //find the response by id and set the new paragraph info
    let foundResponse = this.props.responses.find(
      response => response.id === newResponseObj.id,
    );
    foundResponse.paragraph = newResponseObj.response;
    //go through all the response objects and find the matching one and replace the paragraph with the updated version then set state to ALL the responses
    let newResponses = [];
    this.props.responses.forEach(response => {
      if (response.id === foundResponse.id) {
        response = foundResponse;
        newResponses.push(response);
      } else {
        newResponses.push(response);
      }
    });
    this.props.fetchResponses(newResponses);
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={this.toggleModal}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#38b6ff'}}>
            Edit Essay
          </Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
              {this.renderResponse()}
            </ScrollView>
            <Button
              style={{backgroundColor: 'white', fontWeight: 'bold', margin: 10}}
              title="Done Editing"
              onPress={this.handleDismiss}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const msp = state => {
  return {
    responses: state.response.responses,
  };
};

const mdp = dispatch => {
  return {
    fetchResponses: data => dispatch(fetchResponses(data)),
  };
};

export default connect(
  msp,
  mdp,
)(EditEssay);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  scrollView: {
    margin: 5,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderColor: '#38b6ff',
    borderWidth: 5,
  },
});
