import { Text, View, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';
import { useState } from 'react';
import EditModal from '../EditComponents/EditModal';

const speak = (word) => {
    Speech.speak(word, { voice: 'com.apple.voice.compact.he-IL.Carmit' });
};

function Conj10(props) {
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
                        <View style={styles.pronounContainer}><Text style={styles.pronounText}>אני</Text></View>
                        <View style={styles.pronounContainer}><Text style={styles.pronounText}>אתה</Text></View>
                        <View style={styles.pronounContainer}><Text style={styles.pronounText}>את</Text></View>
                        <View style={styles.pronounContainer}><Text style={styles.pronounText}>הוא</Text></View>
                        <View style={styles.pronounContainer}><Text style={styles.pronounText}>היא</Text></View>
                    </View>
                    <View>
                        <View style={styles.conjugationContainer}><Text style={styles.conjugationText} onLongPress={() => OpenEditModalHandler(props.conj1, props.type1)} onPress={() => speak(props.conj1)}>{props.conj1}</Text></View>
                        <View style={styles.conjugationContainer}><Text style={styles.conjugationText} onLongPress={() => OpenEditModalHandler(props.conj2, props.type2)} onPress={() => speak(props.conj2)}>{props.conj2}</Text></View>
                        <View style={styles.conjugationContainer}><Text style={styles.conjugationText} onLongPress={() => OpenEditModalHandler(props.conj3, props.type3)} onPress={() => speak(props.conj3)}>{props.conj3}</Text></View>
                        <View style={styles.conjugationContainer}><Text style={styles.conjugationText} onLongPress={() => OpenEditModalHandler(props.conj4, props.type4)} onPress={() => speak(props.conj4)}>{props.conj4}</Text></View>
                        <View style={styles.conjugationContainer}><Text style={styles.conjugationText} onLongPress={() => OpenEditModalHandler(props.conj5, props.type5)} onPress={() => speak(props.conj5)}>{props.conj5}</Text></View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row-reverse' }}>
                    <View>
                        <View style={styles.pronounContainer}><Text style={styles.pronounText}>אנחנו</Text></View>
                        <View style={styles.pronounContainer}><Text style={styles.pronounText}>אתם</Text></View>
                        <View style={styles.pronounContainer}><Text style={styles.pronounText}>אתן</Text></View>
                        <View style={styles.pronounContainer}><Text style={styles.pronounText}>הם</Text></View>
                        <View style={styles.pronounContainer}><Text style={styles.pronounText}>הן</Text></View>
                    </View>
                    <View>
                        <View style={styles.conjugationContainer}><Text style={styles.conjugationText} onLongPress={() => OpenEditModalHandler(props.conj6, props.type6)} onPress={() => speak(props.conj6)}>{props.conj6}</Text></View>
                        <View style={styles.conjugationContainer}><Text style={styles.conjugationText} onLongPress={() => OpenEditModalHandler(props.conj7, props.type7)} onPress={() => speak(props.conj7)}>{props.conj7}</Text></View>
                        <View style={styles.conjugationContainer}><Text style={styles.conjugationText} onLongPress={() => OpenEditModalHandler(props.conj8, props.type8)} onPress={() => speak(props.conj8)}>{props.conj8}</Text></View>
                        <View style={styles.conjugationContainer}><Text style={styles.conjugationText} onLongPress={() => OpenEditModalHandler(props.conj9, props.type9)} onPress={() => speak(props.conj9)}>{props.conj9}</Text></View>
                        <View style={styles.conjugationContainer}><Text style={styles.conjugationText} onLongPress={() => OpenEditModalHandler(props.conj10, props.type10)} onPress={() => speak(props.conj10)}>{props.conj10}</Text></View>
                    </View>
                </View>
            </View>
        </View>
        </View>
    );
};

export default Conj10;

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
        padding: 5,
        marginLeft: 10,
        justifyContent: 'right',
        textAlign: 'right',
    },
    conjugationText: {
        textAlign: 'right',
        color: 'black',
        fontWeight: '500',
    },
});