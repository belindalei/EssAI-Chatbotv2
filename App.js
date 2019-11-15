import React from 'react';
import AppContainer from './src/navigation';
import {SafeAreaView, StyleSheet} from 'react-native';

//For Redux
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './app/Reducers/index.js';
import {Provider} from 'react-redux';

console.disableYellowBox = true

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)));

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    height: '100%',
  },
});
