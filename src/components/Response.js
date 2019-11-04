import React from 'react';
import {Text} from 'react-native';

const Response = props => {
  return <Text key={props.response.id}>{props.response.paragraph}</Text>;
};

export default Response;
