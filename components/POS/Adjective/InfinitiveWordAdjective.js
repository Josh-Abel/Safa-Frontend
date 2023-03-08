import { View, Text, StyleSheet } from 'react-native';
import FormBlockWrapper from '../../../Wrappers/FormBlockWrapper';
import * as Speech from 'expo-speech';
import { useState } from 'react';
import EditModal from '../../EditComponents/EditModal';


function InfinitiveWordAdjective(props) {

    const speak = (hebrew_nikkud) => {
        const word = hebrew_nikkud;
        Speech.speak(word, { voice: 'com.apple.voice.compact.he-IL.Carmit' });
    };

    const [showEditor, setShowEditor] = useState(false);
    const [word, setWord] = useState("")
    const [type,setType] = useState("")

    const OpenEditModalHandler = (word, type) => {
        setWord(word);
        setType(type);
        setShowEditor(true);
    }

    return (
        <View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <EditModal data={props.data} id={props.id} word={word} type={type} visible={showEditor} onRequestClose={() => setShowEditor(false)} />
            </View>
            <FormBlockWrapper boxType='infinitive'>
                <View style={styles.shoreshContainer}><Text style={styles.shoreshText}>{props.shoresh}</Text></View>
                <View>
                    <Text style={styles.infinitiveTextNikkud} onLongPress={() => OpenEditModalHandler(props.hebrew_nikkud, "hebrew_nikkud")} onPress={() => speak(props.hebrew_nikkud)}>{props.hebrew_nikkud}</Text>
                    <Text style={styles.inifinitiveTextNoNikkud} onLongPress={() => OpenEditModalHandler(props.hebrew, "hebrew")}>{props.hebrew}</Text>
                    <View style={{ backgroundColor: 'white', borderRadius: 5 }}><Text style={styles.englishTranslation} onLongPress={() => OpenEditModalHandler(props.english, "english")}>{props.english}</Text></View>
                </View>
                <View style={styles.POSContainer}>
                    <View style={{ backgroundColor: 'white', borderRadius: 5, marginBottom: 3 }}><Text style={styles.POSTexts}>Adj</Text></View>

                </View>
            </FormBlockWrapper>
        </View>
    );
};

export default InfinitiveWordAdjective;

const styles = StyleSheet.create({
    infinitiveTextNikkud: {
        fontSize: 35,
        fontFamily: 'Menlo',
        textAlign: 'center',
        padding: 5,
        fontWeight: 'normal',
        color: 'red',
    },
    inifinitiveTextNoNikkud: {
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
        padding: 5,
    },
    englishTranslation: {
        fontsize: 15,
        textAlign: 'center',
        padding: 5,
        paddingHorizontal: 12,
        fontFamily: 'Menlo',
        color: 'red',
    },
    shoreshContainer: {
        paddingTop: 7,
        marginLeft: 5,
    },
    shoreshText: {
        color: "#6F6E6E",
        fontSize: 20,
        fontWeight: '800',
        fontFamily: 'Menlo'
    },
    POSContainer: {
        paddingTop: 3,
        marginRight: 5,
    },
    POSTexts: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 7,
        paddingVertical: 5,
    }
});

