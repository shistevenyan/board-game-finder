import React, {useCallback, useState, useRef } from 'react';
import { TouchableHighlight } from 'react-native';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Buttons = ({ navigation, options, nextRoute }) => {
    const buttonOptions = options;
    const route = nextRoute;
    const [activeOption, setActiveOption] = useState()
    
    const updateActiveOption = (option) => {
        setActiveOption(option)
    }

    return (
        <View style={styles.ButtonContainer}>
            {buttonOptions.map((option, index) => {
                return (
                    <TouchableOpacity
                        style={{ backgroundColor: activeOption === option ? "#FF6767" : 'white'}}
                    key={index}
                    onPress={() => updateActiveOption(option)} >
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
            {activeOption ? 
                <Button
                    buttonStyle={styles.navButton}
                    titleStyle={styles.navTitle}
                    onPress={() => navigation.navigate(route)}
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
})