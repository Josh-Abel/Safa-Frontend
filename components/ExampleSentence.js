import { View, Text, StyleSheet, TextInput } from 'react-native';
import FormBlockWrapper from '../Wrappers/FormBlockWrapper';

function ExampleSentence(props) {
    return (
        <FormBlockWrapper boxType='conj'>
            <View style={styles.titleContainer}><Text style={styles.titleText}>Example Sentence</Text></View>
            <View style={styles.exampleContainer}>
                <Text>{props.example}</Text>
            </View>
        </FormBlockWrapper>
    );
};

export default ExampleSentence;

const styles = StyleSheet.create({
    exampleContainer: {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    example: {
        justifyContent: 'flex-start',
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