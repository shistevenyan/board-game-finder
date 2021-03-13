import React from 'react';
import { View } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const GameResult = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
});

if (!fontsLoaded) {
    return <AppLoading />;
}
  return (
    <View>

    </View>
  )
}

export default GameResult;