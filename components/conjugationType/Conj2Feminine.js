import { Text, View, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';
import { useState } from 'react';
import EditModal from '../EditComponents/EditModal';


const speak = (word) => {
    Speech.speak(word, { voice: 'com.apple.voice.compact.he-IL.Carmit' });
};

function Conj2Feminine(props) {
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
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{props.title}</Text>
            </View>
            <View style={styles.conjugationColumnsContainer}>
                <View style={{ flexDirection: 'row-reverse' }}>
                    <View>
                        <View style={styles.pronounContainer}>
                            <View><Text style={styles.pronounText}>היא</Text></View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-around' }}>
                        <View style={styles.conjugationContainer}><Text style={styles.conjugationText} onLongPress={() => OpenEditModalHandler(props.conj1, props.type1)} onPress={() => speak(props.conj1)}>{props.conj1 !== 'nan' ? props.conj1 : "-"}</Text></View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row-reverse' }}>
                    <View>
                        <View style={styles.pronounContainer}>
                            <View><Text style={styles.pronounText}>הן</Text></View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-around' }}>
                        <View style={styles.conjugationContainer}><Text style={styles.conjugationText} onLongPress={() => OpenEditModalHandler(props.conj2, props.type2)} onPress={() => speak(props.conj2)}>{props.conj2 !== 'nan' ? props.conj2 : "-"}</Text></View>
                    </View>
                </View>
            </View>
        </View>
        </View>
    );
};

export default Conj2Feminine;

const styles = StyleSheet.create({
    conjugationColumnsContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
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
    singleConjContainer: {
        flexDirection: 'row-reverse',
    },
    pronounContainer: {
        padding: 5,
        marginLeft: 10,
        justifyContent: 'right',
        textAlign: 'right',
    },
    pronounText: {
        textAlign: 'right',
        color: 'grey',
    },
    conjugationContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 3,
        paddingHorizontal: 5,
    },
    conjugationText: {
        textAlign: 'right',
        color: 'black',
        fontWeight: '500',
    },
});