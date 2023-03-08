import { TextInput, StyleSheet, View } from 'react-native';
import { useState } from 'react';

function WordInput(props) {

    return (
        <View style={styles.inputBox}>
            <TextInput
                style={styles.input}
                placeholder={props.sample}
                value={props.input}
                clearButtonMode='while-editing'
                onChangeText={props.setInput}
                multiline={props.multiline}
            />
        </View>

    );
};

export default WordInput;

const styles = StyleSheet.create({
    inputBox: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        borderColor: "#4A7DAA",
        borderWidth: 3,
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
})