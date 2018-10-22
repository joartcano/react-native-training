
//import libraries
import React from 'react';
import { View, ActivityIndicator } from 'react-native';


//make component
const Spinner = ({ size }) => {
    return (
        <View styles={styles.spinnerStyle}>
            <ActivityIndicator size={ size || 'large'}/>
        </View>    
    );
};

const styles = { 
    spinnerStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
};



//make component available to the other parts of the app
export  { Spinner };
