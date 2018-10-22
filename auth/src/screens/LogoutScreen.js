
import React from 'react';
import { View } from 'react-native';
import { Header, Button } from '../components/common';


class LogoutScreen extends React.Component {
  render() {
    return (
      <View >
            <Header headerText={'Logout Screen'}/>
            <Button onPress={this.props.handlePress}> Log out </Button>
      </View>
    );
  }
}

export  { LogoutScreen };

