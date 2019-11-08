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
    paragraph: '',
  };

  componentDidMount() {
    this.props.responses.forEach(response => {
      this.setState({
        paragraph: response.paragraph,
      });
    });
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  handleSubmit = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
    alert('Your essay has been updated!');
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
              <TextInput
                multiline={true}
                numberOfLines={500}
                style={styles.paragraph1}
                onChangeText={paragraph => this.setState({paragraph})}
                value={this.state.paragraph}
              />
            </ScrollView>
            <Button
              style={{backgroundColor: 'white', fontWeight: 'bold'}}
              title="Save Edits!"
              onPress={this.handleSubmit}
            />
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
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderColor: '#38b6ff',
    borderWidth: 5,
  },
  paragraph1: {
    padding: 20,
    width: '100%',
    height: '100%',
    margin: 2,
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
