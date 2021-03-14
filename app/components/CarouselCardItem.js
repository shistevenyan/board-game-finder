// import React from 'react';
// import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
// import { Card } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
// import AppLoading from 'expo-app-loading';

//     return (
//         <Card key={index} containerStyle={styles.card}>
//             <Card.Title style={styles.title}> {title} </Card.Title>
//             <Card.Image source={{uri: item.image}} style={styles.image}/>
//             <Text style={styles.content}> <Icon name="people" size={22} color="#FF6767" /> {item.players} players </Text>
//             <Text style={styles.content}> <Icon name="access-time" size={22} color="#FF6767" /> {item.playtime} mins. </Text>
//             <Text> { getStars(item.rating) } </Text>
//         </Card>
//     );
// };

import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const getStars = (rating) => {
    switch (rating) {
        case 2.5:
            return (
                <Text>
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star-half"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star-outline"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star-outline"
                        size={20}
                        color="#FF6767"
                    />
                </Text>
            );

        case 3.0:
            return (
                <Text>
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star-outline"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star-outline"
                        size={20}
                        color="#FF6767"
                    />
                </Text>
            );

        case 3.5:
            return (
                <Text>
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star-half"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star-outline"
                        size={20}
                        color="#FF6767"
                    />
                </Text>
            );

        case 4.0:
            return (
                <Text>
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star-outline"
                        size={20}
                        color="#FF6767"
                    />
                </Text>
            );

        case 4.5:
            return (
                <Text>
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star-half"
                        size={20}
                        color="#FF6767"
                    />
                </Text>
            );

        case 5.0:
            return (
                <Text>
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                    <Icon
                        name="star"
                        size={20}
                        color="#FF6767"
                    />
                </Text>
            );
    }
}

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.body}> {getStars(item.rating)} </Text>
            <Text style={styles.body}> <Icon name="people" size={15} color="#FF6767" /> {item.players} players </Text>
            <Text style={styles.body}> <Icon name="access-time" size={15} color="#FF6767" /> {item.playtime} mins. </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#FF6767",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  image: {
    width: ITEM_WIDTH,
    height: 200,
  },

  header: {
    color: "#FF6767",
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
    marginBottom: 20,
  },

  body: {
    color: "#FF6767",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  }
})

export default CarouselCardItem;