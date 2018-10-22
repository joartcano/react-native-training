
//import libraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';



//make component
const Button = ({onPress, children}) => {
    const { buttonStyle, textStyle }  = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
       
    );
};



const styles = {
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
   
       
};


//make component available to the other parts of the app
export  {Button};
