import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import Modal from 'react-native-modal';

class Instruction extends React.Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="Don't see anything?" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.container}>
            <Text style={styles.text1}>
              That's because you haven't written anything yet silly! To write
              your essay, press the "Chat with Sally" button.
            </Text>
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

export default Instruction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  text1: {
    width: '100%',
    height: 130,
    margin: 2,
    backgroundColor: '#38b6ff',
    borderColor: 'white',
    borderWidth: 5,
    color: 'white',
    fontSize: 20,
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
});
