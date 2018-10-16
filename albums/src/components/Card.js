
//import libraries
import React from 'react';
import { View, StyleSheet } from 'react-native';


//make component
const Card = (props) => {
    return (
        <View style={styles.container}>
            { props.children }
        </View>    
    );
};
// class Card extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 { this.props.children }
//             </View>    
//         );
//     }
// }

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
   
       
});


//make component available to the other parts of the app
export default Card;
