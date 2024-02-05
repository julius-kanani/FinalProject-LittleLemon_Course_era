import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { validateEmail } from '../utils';

const welcomeScreenImage = require('../img/logo.png');

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const isEmailValid = validateEmail(email);

    const handleSubscribe = () => {
        Alert.alert(
            "Thanks for subscribing, stay tuned!",
            undefined,
            [{ text: "OK", onPress: clearTextInput }]
        );
    };

    const clearTextInput = () => {
        setEmail('');
    };

    return (
        <View style={styles.container} >
            <View style={styles.logoContainer}>
                <Image 
                    source={welcomeScreenImage}
                    resizeMode='contain'
                    style={styles.logo}
                />
            </View>

            <Text 
                style={styles.logoText}
                numberOfLines={2}
            >
                Subscribe to our newsletter for our latest delicious recipes!
            </Text>

            <TextInput 
                style={styles.inputText}
                placeholder='Type your email'
                onChangeText={setEmail}
                textContentType="emailAddress"
                keyboardType="email-address"
                
            />

            <TouchableOpacity 
                style={[styles.button, !isEmailValid && styles.disabled]} 
                disabled={!isEmailValid}
                onPress={() => {handleSubscribe()}}>
                <Text style={styles.SubscribeText} >Subscribe</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 40
    },

    logoContainer:{
        alignItems: 'center',
    },

    logo:{
        width: 100,
        height: 100,
    },

    logoText: {
        textAlign: 'center',
        fontSize: 24,
    },

    inputText: {
        borderWidth: 1,
        width: '100%',
        padding: 8,
        borderRadius: 5,
        marginTop: 30
    },

    button: {
        width: '100%',
        marginTop: 20,
        padding: 10
        
    },

    SubscribeText: {
        backgroundColor: 'darkgreen',
        fontSize: 24,
        color: '#FFFFFF',
        borderRadius: 8,
        textAlign: 'center',
        padding: 5,
    },

    disabled: {
        backgroundColor: 'grey',
        opacity: 0.5,
    }

});

export default Subscribe;