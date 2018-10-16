
//import libraries
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//make component
class AlbumDetail extends React.Component {

    componentDidMount() {
        console.log('componentDidMount()  album = ', this.props.album);
    }

    render() {
        const { title, artist, thumbnail_image, image, url} = this.props.album;
        const { 
            thumbNailStyle,
            headerContentStyle,
            thumbNailContainerStyle,
            headerTextStyle,
            imageStyle
        } = styles;
        
        return (
            <Card>
                <CardSection>
                    <View style={thumbNailContainerStyle}>    
                        <Image
                            style={thumbNailStyle}
                            source={{uri: thumbnail_image}}
                            />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}> {title} </Text>         
                        <Text> {artist} </Text>
                    </View>
                    
                </CardSection>
                <CardSection>
                        <Image
                            style={imageStyle}
                            source={{uri: image}}
                        />
                
                </CardSection>
                <CardSection>
                        <Button handlePress={() => Linking.openURL(url)} >
                            Buy now
                        </Button>
                
                </CardSection>
            </Card>    
        );
    }
}

const styles = {
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbNailStyle: {
        width: 50,
        height: 50
    },
    imageStyle: {
        height: 300,
        flex:1,
        width: null,
       
    },
    thumbNailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

//make component available to the other parts of the app
export default AlbumDetail;
