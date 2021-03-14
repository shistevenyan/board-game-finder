import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const CarouselCardItem = ({ title, item, index }) => {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const getStars = (rating) => {
        switch(rating) {
            case 2.5:
                return (
                    <Text>
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />                    
                        <Icon
                            name="star-half"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star-outline"
                            size={25}
                            color="#FF6767"
                        />                    
                        <Icon
                            name="star-outline"
                            size={25}
                            color="#FF6767"
                        />
                    </Text>
                );

            case 3.0:
                return (
                    <Text>
                        <Icon
                            name="star"
                            size={28}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={28}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={28}
                            color="#FF6767"
                        />
                        <Icon
                            name="star-outline"
                            size={28}
                            color="#FF6767"
                        />
                        <Icon
                            name="star-outline"
                            size={28}
                            color="#FF6767"
                        />
                    </Text>
                );
            case 3.5:
                return (
                    <Text>
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star-half"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star-outline"
                            size={25}
                            color="#FF6767"
                        />
                    </Text>
                );
            case 4.0:
                return (
                    <Text>
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star-outline"
                            size={25}
                            color="#FF6767"
                        />
                    </Text>
                );
            case 4.5:
                return (
                    <Text>
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star-half"
                            size={25}
                            color="#FF6767"
                        />
                    </Text>
                );
            case 5.0:
                return (
                    <Text>
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                        <Icon
                            name="star"
                            size={25}
                            color="#FF6767"
                        />
                    </Text>
                );
        }
    }


    return (
        <Card key={index} containerStyle={styles.card}>
            <Card.Title style={styles.title}> {title} </Card.Title>
            <Card.Image source={{uri: item.image}} style={styles.image}/>
            <Text style={styles.content}> <Icon name="people" size={22} color="#FF6767" /> {item.players} players </Text>
            <Text style={styles.content}> <Icon name="access-time" size={22} color="#FF6767" /> {item.playtime} mins. </Text>
            <Text> { getStars(item.rating) } </Text>
        </Card>
    );
};

export default CarouselCardItem;

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginBottom: 70,
    },

    image: {
        width: 200,
        height: 150,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#FF6767",
        fontFamily: "Inter_400Regular",
    },

    content: {
        color: "#FF6767",
        fontFamily: "Inter_400Regular",
        fontSize: 28,
    },

    icon: {
        alignItems:'baseline',
        justifyContent: 'center',
        width: 25,
        height: 25,
    }
});
