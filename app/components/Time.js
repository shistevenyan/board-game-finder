import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Button } from 'react-native-elements';
import PeopleLogo from '../assets/time.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Time = () => {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.content}>
                How much <Text style={{ fontStyle: 'italic' }}>Time</Text> (minutes) do you have?
            </Text>
            <Image source={PeopleLogo} style={styles.logo} />

            <View style={styles.buttonRow}>
                <Button buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle}
                    title="15"
                    type="outline"
                />
                <Button buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle}
                    title="30"
                    type="outline"
                />
                <Button buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle}
                    title="45"
                    type="outline"
                />
            </View>

            <View style={styles.buttonRow}>
                <Button buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle}
                    title="60"
                    type="outline"
                />
                <Button buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle}
                    title="90"
                    type="outline"
                />
                <Button buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle}
                    title="120"
                    type="outline"
                />
            </View>

            <View style={styles.buttonRow}>
                <Button buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle}
                    title="120+"
                    type="outline"
                />
            </View>

            <View style={styles.navRow}>
                <Button
                    buttonStyle={styles.navButton}
                    titleStyle={styles.navTitle}
                    icon={
                        <Icon
                            name="navigate-before"
                            size={25}
                            color="white"
                        />
                    }
                    iconLeft
                    title="Back"
                />

                <Button
                    buttonStyle={styles.navButton}
                    titleStyle={styles.navTitle}
                    icon={
                        <Icon
                            name="navigate-next"
                            size={25}
                            color="white"
                        />
                    }
                    iconRight
                    title="Next"
                />
            </View>

        </View>
    );
}

export default Time;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

    navRow: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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