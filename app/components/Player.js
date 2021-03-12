import React, { useState, useRef } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Button } from 'react-native-elements';
import PeopleLogo from '../assets/people.png'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import Buttons from './Buttons';

const Player = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
    });

    const [ activeOption, setActiveOption ] = useState()
    const gameParams = {};
    const options = ['1','2','3','4','5','6','7','8','9+'];
    const nextRoute = "Time";
    const currentPage = "Players";

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.content}>
                    How many <Text style = {{ fontStyle: 'italic' }}>Players</Text> do you have?
                </Text>
                <Image source={PeopleLogo} style={styles.logo} />
            </View>
            <Buttons
                gameParams={gameParams}
                currentPage={currentPage}
                options={options}
                nextRoute={nextRoute}
                navigation={navigation}
            />
        </View>
    );
}

export default Player;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },

    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },

    content: {
        color: "#FF6767",
        fontSize: 25,
        width: 300,
        textAlign: 'center',
        fontFamily: "Inter_400Regular",
    },

    logo: {
        marginBottom: 20,
    },

    buttonRow: {
        marginBottom: 30,
        flexDirection: 'row',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
    },
    buttonStyle: {
        width: 80,
        height: 80,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#FF6767",
        borderWidth: 2,
    },

    titleStyle: {
        fontFamily: "Inter_400Regular",
        color: "#FF6767",
        fontSize: 25,
    },

    navButton: {
        backgroundColor: "#FF6767",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 55,
        marginRight: 55,
        borderRadius: 60,
        width: 100,
        height: 45,
    },

    navTitle: {
        fontFamily: "Inter_400Regular",
    }
});