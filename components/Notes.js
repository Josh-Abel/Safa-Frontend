import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import FormBlockWrapper from '../Wrappers/FormBlockWrapper';

function Notes(props) {
    return (
        <FormBlockWrapper boxType='conj'>
            <View style={styles.titleContainer}><Text style={styles.titleText}>Notes</Text></View>
            <View style={styles.notesContainer}>
                         <Text>{props.note}</Text>
            </View>
        </FormBlockWrapper>
    );
};

export default Notes;

const styles = StyleSheet.create({
    notesContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 3,
    },
    notes: {
        justifyContent: 'center',
        color: 'grey',
    },
    titleContainer: {
        margin: 7,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
    },
    titleText: {
        color: 'grey',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 5,
    },
});