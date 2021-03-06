import React, {useCallback, useState, useRef } from 'react';
import { TouchableHighlight } from 'react-native';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Buttons = ({options, setActiveRef}) => {
    const buttonOptions = options;
    const [activeOption, setActiveOption] = useState()
    
    const updateActiveOption = (event) => {
        setActiveOption(event.target.innerText)
        setActiveRef(event.target.innerText)
    }

    return (
        <View style={styles.ButtonContainer}>
            {buttonOptions.map((option, index) => {
                return (
                    <TouchableHighlight
                    ref={setActiveRef}
                    key={index}
                    onPress={(event) => updateActiveOption(event)} >
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
                            backgroundColor: activeOption === option ? "#FF6767" : 'white',
                            color: activeOption === option ? 'black' : "#FF6767",
                            
                        }}>
                            {option}
                        </Text>
                    </TouchableHighlight>
                )
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    ButtonContainer: {
       flexDirection: 'row',
       flexWrap: 'wrap',
       justifyContent: 'center',
    },
})
export default Buttons;