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
import Response from '../components/Response';

class EditEssay extends React.Component {
  state = {
    isModalVisible: false,
    paragraph: [],
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  renderResponses = () => {
    console.log('responses', this.props.responses);
    return this.props.responses.map(response => {
      {
        this.setState({paragraph: response.paragraph});
      }
      return (
        <TextInput key={response.id}>
          <Response response={response} />
        </TextInput>
      );
    });
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
              <Text style={styles.text1}>{this.renderResponses()}</Text>
            </ScrollView>
            <Button
              style={{color: 'white'}}
              title="Dismiss"
              onPress={this.toggleModal}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default EditEssay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  scrollView: {
    margin: 5,
    height: 250,
    padding: 7,
  },
  text1: {
    width: 350,
    height: '100%',
    margin: 2,
    backgroundColor: 'white',
    borderColor: '#38b6ff',
    borderWidth: 5,
    color: 'black',
    fontSize: 14,
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
});
