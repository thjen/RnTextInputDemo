import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text, Keyboard } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'please type your text',
            typePass: '',
            typeDescription: ''
        };
    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState(() => {
                return {typedText: 'Keyboard is show'}
            })
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState(() => {
                return {typedText: 'Keyboard is hide'}
            })
        })
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    render() {
        return (
            <View style = {{
                backgroundColor: 'white'
            }}>
                <TextInput
                    style = {{
                        height: 40,
                        borderColor: 'grey',
                        margin: 10,
                        borderWidth: 1,
                        padding: 10
                    }}
                    keyboardType = 'email-address'
                    placeholder = 'Enter your email'
                    placeholderTextColor = 'blue'
                    onChangeText = {
                        (text) => {
                            this.setState((previousState) => {
                                return {
                                    typedText: text
                                };
                            });
                        }
                    }
                />
                <TextInput
                    style = {{
                        height: 40,
                        margin: 10,
                        padding: 10,
                        borderColor: 'grey',
                        borderWidth: 1
                    }}
                    keyboardType = 'default'
                    placeholder = 'Enter password'
                    secureTextEntry = {true}
                    onChangeText = {
                        (text) => {
                            this.setState(() => {
                                return {
                                    typePass: text
                                }
                            });
                        }
                    }
                />
                <Text style = {{marginLeft: 20}}>{this.state.typedText}</Text>
                <Text style = {{marginLeft: 20}}>{this.state.typePass}</Text>
                <TextInput
                    style = {{
                        height: 100,
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    multiline = {true}
                    borderBottomColor = 'red'
                    borderBottomWidth = {3}
                    editable = {true}
                    autoforcus = {true}
                    returnKeyType = 'done'
                    onSubmitEdditing = {Keyboard.dismiss}
                    onChangeText ={
                        (text) => {
                            this.setState(() => {
                                return {
                                    typeDescription: text
                                }});
                        }
                    }
                />
                <Text style = {{marginLeft: 20}}>{this.state.typeDescription}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('TextInputDemo', () => App);
