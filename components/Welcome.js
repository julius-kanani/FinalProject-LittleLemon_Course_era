import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const welcomeScreenImage = require('../img/logo.png');

const Welcome = ( {navigation} ) => {

    return (
        <View style={styles.container} >
            <View style={styles.logoContainer}>
                <Text style={styles.logoText} >LITTLE</Text>
                <Image 
                    source={welcomeScreenImage}
                    resizeMode='contain'
                    style={styles.logo}
                />
                <Text style={styles.logoText} >LEMON</Text>
            </View>
            
            <Text style={styles.logoDescription} >Little Lemon, your local Mediterranean Bistro</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subscribe')}>
                <Text style={styles.newsletterText} >Newsletter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    logoContainer:{
        alignItems: 'center',
    },

    logo:{
        width: 200,
        height: 200,
    },

    logoText:{
        fontSize: 50,
        color: 'darkgreen',
        fontWeight: 'bold',
        letterSpacing: 10,
    },

    logoDescription: {
        textAlign: 'center',
        fontSize: 24,
        width: '70%',
    },

    button: {
        width: '90%',
        bottom: 30
        
    },

    newsletterText: {
        backgroundColor: 'darkgreen',
        fontSize: 24,
        color: '#FFFFFF',
        borderRadius: 8,
        textAlign: 'center',
        padding: 5,
    }

});

export default Welcome;