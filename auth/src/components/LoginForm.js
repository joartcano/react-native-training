
//import libraries
import React from 'react';
import firebase from 'firebase';
import { Text, View } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';


//make component
class  LoginForm  extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }
    onButtonPress() {
        const { email, password } = this.state;

        this.setState({
                error: '',
                loading: true 
            });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
            });


    }

    onLoginFail() {
        this.setState({
            error : 'Authentication failed.',
            loading: false
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    renderButton() {

        if(this.state.loading) {
            return <Spinner size='small'/>;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                    Log in 
            </Button>
        );
    }

    render () {
        return (
           
            <Card>
                <CardSection>
                    <Input
                        placeholder={'user@gmail.com'}
                        label={'Email'}
                        value={this.state.text}
                        onChangeText={(email) => this.setState({email})}
                    ></Input>
                
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder={'password'}
                        label={'Password'}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </CardSection>
                    <Text style={styles.errorTextStyle}> { this.state.error} </Text>
                <CardSection >
                    <View style={{flex:1}}>
                        { this.renderButton() } 
                    </View>
                </CardSection>
            </Card>
            
            
        );
    } 

}

const styles = {
    errorTextStyle: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 18
    }
};




//make component available to the other parts of the app
export  { LoginForm };