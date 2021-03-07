import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Results = ({navigation, route}) => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <View>
      <Text>Our Recommendations</Text>

      <View>
        <View>

        </View>
        <View>

        </View>
      </View>
      <Button
        buttonStyle={styles.navButton}
        titleStyle={styles.navTitle}
        onPress={() => navigation.navigate(route, gameState)}
        icon={
            <Icon
                name="navigate-next"
                size={25}
                color="white"
            />
        }
        iconRight
        title="Suggest More"
      />
      <Button
        buttonStyle={styles.navButton}
        titleStyle={styles.navTitle}
        onPress={() => navigation.navigate(route, gameState)}
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
  )
}

export default Results;

const styles = StyleSheet.create({
  navButton: {
      backgroundColor: "#FF6767",
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft: 55,
      marginRight: 55,
      borderRadius: 60,
      width: 100,
      height: 45,
  },
  navTitle: {
      fontFamily: "Inter_400Regular",
  },
  navRow: {
      marginTop: 30,
      flexDirection: 'row',
      alignContent: 'flex-start',
      justifyContent: 'flex-start'
  }
})