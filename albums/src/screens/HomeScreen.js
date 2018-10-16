
//import libraries
import React from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import AlbumList from '../components/AlbumList';

//make component
class HomeScreen extends React.Component {
    
    render() {
        return (
                <View>
                    <Header headerText={'Albums'}></Header>
                    <AlbumList headerText={'AlbumList'}></AlbumList>
                </View>
                
                
        );
      }
       
}

//make component available to the other parts of the app
export default HomeScreen;
