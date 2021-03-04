import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// css stylesheet for React Native
const styles = StyleSheet.create({
    title: {
        fontSize: 100,
        color: "#FF6767",
        fontWeight: "400",
    },
    subTitle: {
        color: "#FF6767",
        fontSize: 15,
        fontWeight: "400",
    },
    content: {
        color: "#FF6767",
        fontSize: 15,
        width: 300,
        marginBottom: 50,
        fontWeight: "400",
        
    },
    button: {
        backgroundColor: "#FF6767",
        color: "white",
        fontSize: 20,
        borderRadius: 15,
        width: 200,
        height: 70,
        fontWeight: "400",
    }
})

// Name of component
const Home = () => {
    // Logic for components can go in here.

    return (
        <View>
            {/*
            View is a container component
            Use Text to encapsulate strings instead of usual HTML tags.
            */}
            <Text style={styles.title}>
                Board.
            </Text>
            <Text style={styles.subTitle}>
                Board Game Finder
            </Text>
            <Text style={styles.content}>
                Ever have a hard time choosing which board game to play? Have no fear, we are here to help! Let us recommend you a few to play!
            </Text>

            <Text style={styles.button}>
                Get Started
            </Text>
        </View>
    )
}

// Make sure there is a export with the component name.
export default Home;