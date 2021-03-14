// import React from 'react';
// import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
// import { Card } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
// import AppLoading from 'expo-app-loading';

// const CarouselCardItem = ({ title, item, index }) => {
//     let [fontsLoaded] = useFonts({
//         Inter_400Regular,
//     });

//     if (!fontsLoaded) {
//         return <AppLoading />;
//     }

//     const getStars = (rating) => {
//         switch(rating) {
//             case 2.5:
//                 return (
//                     <Text>
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />                    
//                         <Icon
//                             name="star-half"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star-outline"
//                             size={25}
//                             color="#FF6767"
//                         />                    
//                         <Icon
//                             name="star-outline"
//                             size={25}
//                             color="#FF6767"
//                         />
//                     </Text>
//                 );

//             case 3.0:
//                 return (
//                     <Text>
//                         <Icon
//                             name="star"
//                             size={28}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={28}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={28}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star-outline"
//                             size={28}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star-outline"
//                             size={28}
//                             color="#FF6767"
//                         />
//                     </Text>
//                 );
//             case 3.5:
//                 return (
//                     <Text>
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star-half"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star-outline"
//                             size={25}
//                             color="#FF6767"
//                         />
//                     </Text>
//                 );
//             case 4.0:
//                 return (
//                     <Text>
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star-outline"
//                             size={25}
//                             color="#FF6767"
//                         />
//                     </Text>
//                 );
//             case 4.5:
//                 return (
//                     <Text>
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star-half"
//                             size={25}
//                             color="#FF6767"
//                         />
//                     </Text>
//                 );
//             case 5.0:
//                 return (
//                     <Text>
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                         <Icon
//                             name="star"
//                             size={25}
//                             color="#FF6767"
//                         />
//                     </Text>
//                 );
//         }
//     }


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

// export default CarouselCardItem;

// const styles = StyleSheet.create({
//     card: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         flexDirection: 'row',
//         marginBottom: 70,
//     },

//     image: {
//         width: 200,
//         height: 150,
//     },

//     title: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: "#FF6767",
//         fontFamily: "Inter_400Regular",
//     },

//     content: {
//         color: "#FF6767",
//         fontFamily: "Inter_400Regular",
//         fontSize: 28,
//     },

//     icon: {
//         alignItems:'baseline',
//         justifyContent: 'center',
//         width: 25,
//         height: 25,
//     }
// });

import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
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
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem