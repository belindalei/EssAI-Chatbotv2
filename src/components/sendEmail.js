// import React from 'react';
// import {Text} from 'react-native';
// import {connect} from 'react-redux';

//use react-native Linking to send email
import qs from 'qs';
import {Linking} from 'react-native';

export async function sendEmail(to, subject, body) {
  let url = `mailto:${to}`;

  // Create email link query
  const query = qs.stringify({
    subject: subject,
    body: body,
  });

  if (query.length) {
    url += `?${query}`;
  }

  // check if we can use this link
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error('Provided URL can not be handled');
  }

  return Linking.openURL(url);
}

// class Essay extends React.Component {
//   render() {
//     return this.props.responses.map(response => {
//       return (
//         <Text key={response.id}>
//           <Response response={response} />
//         </Text>
//       );
//     });
//   }
// }

// const msp = state => {
//   return {
//     responses: state.response.responses,
//   };
// };

// export default connect(msp)(Essay);
