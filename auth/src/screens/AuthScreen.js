
import React from 'react';
import { View } from 'react-native';
import { Header } from '../components/common';
import { LoginForm } from '../components/LoginForm';

class AuthScreen extends React.Component {
  render() {
    return (
      <View >
            <Header headerText={'Authentication'}/>
            <LoginForm />
      </View>
    );
  }
}

export  { AuthScreen };

