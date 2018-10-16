
//import libraries
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

//make component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>         
        </View>    
    );
};
// class Header extends React.Component {

//     render() {
//         return (
//             <View style={styles.viewStyle}>
//                 <Text style={styles.textStyle}>{this.props.headerText}</Text>         
//             </View>
//         );
//     }
// }

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
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
export default Header;
