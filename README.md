# EssAI-Chatbot

Welcome to EssAI!

![EssAI-Logo](src/assets/images/EssAIBot_v3.png)

## Getting Started

The EssAI Chatbot is a mobile application aiming to help students write their college application essay through the assistance of machine learning. It utilizes React Native, Redux, Ruby on Rails, and Google DialogFlow.

For a demo version, please visit this [link](https://vimeo.com/372914204)

### Prerequisites

In order for EssAI to run correctly, you will need a Google Dialogflow account. Directions for set up can be found [here](https://cloud.google.com/dialogflow/docs/quick/setup). In addition, Xcode or a phone simulator that operates with React Native will need to be available.

NOTE: Full AI chatbot functionalities will not be available due to the AI API being unique to my own account.

### Installing

To begin, run the following commands on your console.

`npm install && yarn start`

In a separate terminal window, run:

`react-native run-ios`

You should see the phone simulator appear during this time.

The backend code can be found [here](https://github.com/belindalei/EssAI-apiV2). The backend is currently hosted on Heroku and will not need additional commands. To run the backend, you can go to the path app/Constants/actionCreator.js and comment out the heroku path and comment in the local path. The backend can be run with the following commands:

`rails db:migrate && rails db:seed`
`rails s`

###Future Functionalities
EssAI's current machine learning functionalities are fairly basic. Future development plans include training the Sally bot to be responsive to a wider variety of user responses and also fully build out setting capabilities.

###Author
Belinda Lei
