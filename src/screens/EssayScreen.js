import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Response from '../components/Response';
import {connect} from 'react-redux';
import {fetchResponses} from '../../app/Actions/responses';
import Instruction from '../components/Instruction';
import EditEssay from './EditEssay';

class EssayScreen extends React.Component {
  componentDidMount() {
    axios
      .get('http://localhost:3000/api/v1/responses.json')
      .then(resp => {
        //filters responses by current user
        const filteredByUser = resp.data.filter(
          response => response.user_id === this.props.user.id,
        );
        //filter user responses by ones that need saving w/ astericks
        let savedResponses = filteredByUser.filter(response =>
          response.paragraph.includes('*'),
        );

        //filter out the astericks
        let filteredResponses = [];
        savedResponses.forEach(respObj => {
          let newParagraph = respObj.paragraph.replace(/\*/g, '');
          respObj.paragraph = newParagraph;
          filteredResponses.push(respObj);
        });

        //set the filtered responses to global state
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
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10,
        }}>
        <Image
          style={{flex: 4, height: 260, width: 260}}
          resizeMode="contain"
          source={require('../assets/images/EssAIBot_v3.png')}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Your EssAI</Text>
        <EditEssay responses={this.props.responses} />
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity>{this.renderResponse()}</TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ChatBotScreen')}>
          <Text style={styles.tile1}> Chat with Sally! </Text>
        </TouchableOpacity>
        <Instruction />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  scrollView: {
    backgroundColor: '#F8F8FF',
    margin: 10,
    width: '100%',
    height: 250,
    padding: 7,
  },
  tile1: {
    width: '100%',
    height: 70,
    margin: 2,
    backgroundColor: '#38b6ff',
    borderColor: 'white',
    borderWidth: 5,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
});
