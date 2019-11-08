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
        />
      );
    });
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  handleSubmit = () => {
    //upon submit set the new state to redux

    //set some sort of timeout here
    // alert('Your essay has been updated!');
    this.setState({isModalVisible: !this.state.isModalVisible});
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
              style={{backgroundColor: 'white', fontWeight: 'bold'}}
              title="Save Edits!"
              onPress={this.handleSubmit}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchResponses: data => dispatch(fetchResponses(data)),
  };
};

export default connect(
  null,
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
