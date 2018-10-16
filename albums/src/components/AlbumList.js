
//import libraries
import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import AlbumDetail from './AlbumDetail';
import API from '../utils/api';

//make component
class AlbumList extends React.Component {
    state = {
        albums: []
    }

    async UNSAFE_componentWillMount() {
        //fetch album list from api
        const albums = await API.fetchMusicAlbums();
        this.setState({
            albums: albums
        });
    }

    renderAlbumList() {
        return (
            this.state.albums.map((album, index) => 
               
                <AlbumDetail key={index} album={album}/>
        ));
    }

    render() {
        return (
            <ScrollView>
            {
                this.renderAlbumList()
            }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
   
       
});


//make component available to the other parts of the app
export default AlbumList;
