import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Rating = ({ navigation, route }) => {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
    });
    let gameParams = route;
    const currentPage = "Rating";
    const [ activeOption, setActiveOption ] = useState()

    const updateActiveOption = (option) => {
        setActiveOption(option)
        gameParams[currentPage] = option;
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.content}>
                    Minimum <Text style={{ fontStyle: 'italic' }}>Rating</Text> of the board game?
                </Text>
            </View>
            <View>

            <View style={styles.ButtonContainer} >
                <TouchableOpacity
                    onPress={() => updateActiveOption(2.5)}>
                    <Text
                    style={{
                        width: 200,
                        height: 70,
                        paddingTop: 20,
                        marginRight: 20,
                        marginLeft: 20,
                        marginTop: 20,
                        borderWidth: activeOption === 2.5 ? 3 : 1,
                        textAlign: 'center',
                        alignContent: 'center',
                        borderColor: "#FF6767",
                        
                    }}>
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
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => updateActiveOption(3.0)}>
                    <Text
                    style={{
                        width: 200,
                        height: 70,
                        paddingTop: 20,
                        marginRight: 20,
                        marginLeft: 20,
                        marginTop: 20,
                        borderWidth: activeOption === 3.0 ? 3 : 1,
                        textAlign: 'center',
                        alignContent: 'center',
                        borderColor: "#FF6767",
                        
                    }}>
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
                        <Icon
                            name="star-outline"
                            size={25}
                            color="#FF6767"
                        />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => updateActiveOption(3.5)}>
                    <Text
                    style={{
                        width: 200,
                        height: 70,
                        paddingTop: 20,
                        marginRight: 20,
                        marginLeft: 20,
                        marginTop: 20,
                        borderWidth: activeOption === 3.5 ? 3 : 1,
                        textAlign: 'center',
                        alignContent: 'center',
                        borderColor: "#FF6767",
                        
                    }}>
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
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => updateActiveOption(4.0)}>
                    <Text
                    style={{
                        width: 200,
                        height: 70,
                        paddingTop: 20,
                        marginRight: 20,
                        marginLeft: 20,
                        marginTop: 20,
                        borderWidth: activeOption === 4.0 ? 3 : 1,
                        textAlign: 'center',
                        alignContent: 'center',
                        borderColor: "#FF6767",
                        
                    }}>
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
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => updateActiveOption(4.5)}>
                    <Text
                    style={{
                        width: 200,
                        height: 70,
                        paddingTop: 20,
                        marginRight: 20,
                        marginLeft: 20,
                        marginTop: 20,
                        borderWidth: activeOption === 4.5 ? 3 : 1,
                        textAlign: 'center',
                        alignContent: 'center',
                        borderColor: "#FF6767",
                    }}>
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
                </TouchableOpacity>
            </View>
            
            <View style={styles.navRow }>
                <Button
                    buttonStyle={styles.navButton}
                    titleStyle={styles.navTitle}
                    onPress= {() => navigation.goBack()}
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
                {activeOption ? 
                    <Button
                        buttonStyle={styles.navButton}
                        titleStyle={styles.navTitle}
                        onPress={() => navigation.navigate("Results", gameState)}
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
                    :
                    null }
            </View>
            </View>
        </View>
    );
}

export default Rating;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        
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

    navRow: {
        marginTop: 30,
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'flex-start'
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

    ButtonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

    navTitle: {
        fontFamily: "Inter_400Regular",
    },
});