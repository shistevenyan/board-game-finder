import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

// Name of component
const Results = ({ navigation }) => {
    const [gameResults, setGameResults] = useState();
    const [gameURL, setGameURL] = useState('https://boardgamefinder.herokuapp.com//boardgame-result?max_players=5&max_playtime=16&min_rating=2.5');
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
    });

    // Need to do a string literal to get variables
    useEffect(()=> {
        axios({
            method: 'get',
            url: gameURL
        })
        .then((response)=> {
            setGameResults(response);
            console.log(response);
        })
    },[gameURL])
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.content}>
                Our Recommendations
            </Text>
            
            <Button
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                // onPress={() => navigation.navigate('')}
                icon={
                    <Icon
                        name="navigate-next"
                        size={25}
                        color="white"
                    />
                }
                iconRight
                title="See More"
            />

            <Button
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                onPress={() => navigation.navigate('Home')}
                icon={
                    <Icon
                        name="navigate-next"
                        size={25}
                        color="white"
                    />
                }
                iconRight
                title="Start Over"
            />
        </View>
    );
};

export default Results;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },

    content: {
        color: "#FF6767",
        fontSize: 25,
        width: 300,
        marginBottom: 70,
        textAlign: 'center',
        fontFamily: "Inter_400Regular",
    },

    button: {
        backgroundColor: "#FF6767",
        borderRadius: 60,
        width: 150,
        height: 50,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonTitle: {
        fontSize: 15,
        fontFamily: "Inter_400Regular",
    },

});