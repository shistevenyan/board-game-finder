import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import CarouselCards from './CarouselCards';

// Name of component
const Results = ({ navigation, route }) => {
    const gameParams = route.params;
    const players = `${gameParams['Players']}`;
    const time = `${gameParams['Time']}`;
    const rating = `${gameParams['Rating']}`;
    const item = { "image": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1541176727976", "players": "3-5", "playtime": "15", "rating": 3.0, "url": "https://www.boardgameatlas.com/game/KESRgspolC/12-days" }

    const [gameResults, setGameResults] = useState();
    const [gameURL] = useState(`https://boardgamefinder.herokuapp.com/boardgame-result?max_players=${players}&max_playtime=${time}&min_rating=${rating}`);
    
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
    });

    useEffect(()=> {
        axios({
            method: 'get',
            url: gameURL
        })
        .then((response )=> {
            const gameArray = [];
            let i = 0;
            for(const gameName in response.data) {
                i++;
                let gameInfo = {
                    title: gameName,
                    id: i
                }
            gameArray.push(gameInfo)
            }
            setGameResults(gameArray)
        })
    },[gameURL])
    
    if(!fontsLoaded) {
      return <AppLoading />
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.content}>
                Our Recommendations
            </Text>
            <Text style={styles.cardsContainer}>
              <CarouselCards data={gameResults}/>
            </Text>
            
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
        marginBottom: 30,
        textAlign: 'center',
        fontFamily: "Inter_400Regular",
    },

    button: {
        backgroundColor: "#FF6767",
        borderRadius: 60,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonTitle: {
        fontSize: 15,
        fontFamily: "Inter_400Regular",
    },
    cardsContainer: {
      marginLeft: -40,
      marginBottom: 50,
    },

});