import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import Logo from '../assets/BoardLogo.png'; 
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialIcons';

// Name of component
const Home = () => {
    // Logic for components can go in here.
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            {/*
            View is a container component
            Use Text to encapsulate strings instead of usual HTML tags.
            */}
            <Image source={Logo} style={styles.logo}/>
            <Text style={styles.content}>
                Ever have a hard time choosing which board game to play? Have no fear, we are here to help! Let us recommend you a few to play!
            </Text>

            <Button
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                icon={
                    <Icon
                        name="navigate-next"
                        size={40}
                        color="white"
                    />
                }
                iconRight
                title="Let's Get Started"
            />
        </View>
    );
};

// Make sure there is a export with the component name.
export default Home;

// css stylesheet for React Native
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        marginBottom: 50,
    },

    content: {
        color: "#FF6767",
        fontSize: 15,
        width: 300,
        marginBottom: 70,
        textAlign: 'center',
        fontFamily: "Inter_400Regular",
        fontWeight: "400",
    },

    button: {
        backgroundColor: "#FF6767",
        borderRadius: 60,
        width: 200,
        height: 55,
    },

    buttonTitle: {
        fontFamily: "Inter_400Regular",
    }

})