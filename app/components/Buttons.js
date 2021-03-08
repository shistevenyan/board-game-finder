import React, {useEffect, useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Buttons = ({ navigation, options, nextRoute, currentPage, gameParams}) => {
    const buttonOptions = options;
    const route = nextRoute;
    let gameState = gameParams;
    const [activeOption, setActiveOption] = useState()

    const updateActiveOption = (option) => {
        setActiveOption(option)
        gameState[currentPage] = option;
    }

    return (
        <View>
            <View style={styles.ButtonContainer} >
            {buttonOptions.map((option, index) => {
                return (
                    <TouchableOpacity
                      style={{ backgroundColor: activeOption === option ? "#FF6767" : 'white'}}
                      key={index}
                      onPress={() => updateActiveOption(option)}
                    >
                        <Text
                        style={{
                            width: 75,
                            height: 80,
                            paddingTop: 20,
                            marginRight: 20,
                            marginLeft: 20,
                            marginTop: 20,
                            borderWidth: 1,
                            textAlign: 'center',
                            alignContent: 'center',
                            borderColor: "#FF6767",
                            fontSize: 25,
                            color: activeOption === option ? 'white' : "#FF6767",
                            
                        }}>
                            {option}
                        </Text>
                    </TouchableOpacity>
                )
            })}
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
                        onPress={() => navigation.navigate(route, gameState)}
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
    )
}

export default Buttons;

const styles = StyleSheet.create({
    ButtonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    navButton: {
        backgroundColor: "#FF6767",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 55,
        marginRight: 55,
        borderRadius: 60,
        width: 90,
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