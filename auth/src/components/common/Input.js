
//import libraries
import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

//make component
const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {

    const {textInputStyle, labelStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}> 
            <Text style={labelStyle}>{label}</Text>         
            <TextInput 
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    style={textInputStyle}
                    value={value}
                    onChangeText={onChangeText}/>    
        </View>    
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20,
    },
    textInputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        height: 20,
        width: 100
    },
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }   
});


//make component available to the other parts of the app
export  { Input };
