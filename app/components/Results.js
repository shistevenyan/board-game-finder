import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Name of component
const Results = ({ navigation }) => {
    const result_array = { 'Drink!': { 'players': '6-30', 'playtime': '30-0', 'rating': 5.0, 'image': 'https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1548388430793', 'url': 'https://www.boardgameatlas.com/game/VYhMo57MEf/drink'}, 'Cards Against Humanity: Vote for Hillary Pack': { 'players': '4-30', 'playtime': '30-0', 'rating': 5.0, 'image': 'https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1549928813030', 'url': 'https://www.boardgameatlas.com/game/wlRDiNxrjx/cards-against-humanity-vote-for-hillary-pack'}, "I Don't Know, What Do You Want To Play?": { 'players': '2-999', 'playtime': '5', 'rating': 5.0, 'image': 'https://d2k4q26owzy373.cloudfront.net/150x150/games/empty+box.jpg', 'url': 'https://www.boardgameatlas.com/game/5scKf6oQSb/i-dont-know-what-do-you-want-to-play'}, 'Fishfry Deluxe': { 'players': '2-10', 'playtime': '5',
        'rating': 5.0, 'image': 'https://d2k4q26owzy373.cloudfront.net/150x150/games/empty+box.jpg', 'url': 'https://www.boardgameatlas.com/game/I4ZZu6xXKb/fishfry-deluxe'}, 'Offensive Adult Party Game': { 'players': '3-18', 'playtime': '1', 'rating': 5.0, 'image': 'https://d2k4q26owzy373.cloudfront.net/150x150/games/empty+box.jpg', 'url': 'https://www.boardgameatlas.com/game/uRbA1R6MHT/offensive-adult-party-game'}};
    
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
    });

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