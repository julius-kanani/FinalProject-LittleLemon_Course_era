import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

const welcomeScreenImage = require('../img/logo.png');

const Subscribe = () => {

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
            />

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => {}}>
                <Text style={styles.SubscribeText} >Subscribe</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: .5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
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
        padding: 5,
        borderRadius: 5
    },

    button: {
        width: '100%',
        marginTop: 20
        
    },

    SubscribeText: {
        backgroundColor: 'darkgreen',
        fontSize: 24,
        color: '#FFFFFF',
        borderRadius: 8,
        textAlign: 'center',
        padding: 5,
    }

});

export default Subscribe;