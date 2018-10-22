
import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { AuthScreen } from './screens/AuthScreen';
import { LogoutScreen } from './screens/LogoutScreen';
import { Spinner } from './components/common';
// import { Button } from './components/common';

class App extends Component {
  state = { isLoggedIn: null }
  UNSAFE_componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyBnbpvRvH1ezOcuLCaYVDuEchIYygq8_EE',
      authDomain: 'authentication-6cb4d.firebaseapp.com',
      databaseURL: 'https://authentication-6cb4d.firebaseio.com',
      projectId: 'authentication-6cb4d',
      storageBucket: 'authentication-6cb4d.appspot.com',
      messagingSenderId: '309451550194'
    });

    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        this.setState({
          isLoggedIn: true
        });
      }
      else {
        this.setState({
          isLoggedIn: false
        });
      }
    });
  }
  
  buttonLogoutPress() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.isLoggedIn) {
      case true: 
        return <LogoutScreen handlePress={this.buttonLogoutPress}/>;
      case false: 
        return <AuthScreen />;
      default:
        return  <Spinner />;
    }
    
  }

  render() {
    return (
      <View >
        { this.renderContent() }
      </View>
    );
  }
}

export default App;
 