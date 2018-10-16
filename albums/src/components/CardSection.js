
//import libraries
import React from 'react';
import { View, StyleSheet } from 'react-native';


//make component
const CardSection = (props) => {
    return (
        <View style={styles.container}>
            { props.children }
        </View>    
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        padding: 5,
        borderRadius: 2,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
   
       
});


//make component available to the other parts of the app
export default CardSection;
