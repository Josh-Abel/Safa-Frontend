import { Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import LittleBack from '../CommonComponents/LittleBack';
import LittleNext from '../CommonComponents/LittleNext';
import WordInput from '../CommonComponents/WordInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CompletionCircle from '../CommonComponents/CompletionCircle';
import ImageImporter from '../UncommonComponents/ImageImporter';
import { useContext, useState, useEffect } from 'react';
import { ExampleInputContext } from '../AddContexts';
import * as Contexts from '../AddContexts'

//import CancelButton from '../CommonComponents/CancelButton';

function ExampleImageScreen({ navigation }) {

    const { pos, setPOS } = useContext(Contexts.POSInputContext);
    const { binyan, setBinyan } = useContext(Contexts.BinyanInputContext);
    const { gender, setGender } = useContext(Contexts.GenderInputContext);
    const [englishInput, setEnglishInput] = useContext(Contexts.EnglishInputContext);
    const [hebrewInput, setHebrewInput] = useContext(Contexts.HebrewInputContext);
    const [shoreshInput, setShoreshInput] = useContext(Contexts.ShoreshInputContext);
    const [exampleInput, setExampleInput] = useContext(Contexts.ExampleInputContext);
    const [notesInput, setNotesInput] = useContext(Contexts.NotesInputContext);
    const [image, setImage] = useContext(Contexts.ImageInputContext);

    function cancelHandler() {
        navigation.popToTop(null);
        setPOS(null);
        setBinyan(null);
        setGender(null);
        setEnglishInput("");
        setHebrewInput("");
        setShoreshInput("");
        setExampleInput("")
        setNotesInput("");
        setImage(null);
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button onPress={() => cancelHandler()} title="Cancel" />
        }, [navigation])
    })

    return (
        <View style={styles.mainContainer}>
            {/* <View style={{ alignItems: 'flex-end', marginTop: 10, marginRight: 10 }}><CancelButton navigation={navigation} /></View> */}
            <View style={styles.statusBar}>
                <CompletionCircle color='#999999' />
                <CompletionCircle color='#999999' />
                <CompletionCircle color='#999999' />
                <CompletionCircle color="#EEEEEE" />
            </View>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} >
                <KeyboardAwareScrollView contentContainerStyle={styles.inputs} extraHeight={200}>
                    <ImageImporter />
                    <View>
                        <Text style={styles.text}>Example Sentence:</Text>
                        <WordInput sample="Provide an example sentence..." multiline={true} input={exampleInput} setInput={setExampleInput} />
                    </View>

                </KeyboardAwareScrollView>
            </TouchableWithoutFeedback>
            <View style={styles.arrows}>
                <LittleBack navigation={navigation} />
                <LittleNext navigation={navigation} to="Notes" />
            </View>
        </View>
    );
};

export default ExampleImageScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#C5E7EE',
    },
    statusBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        backgroundColor: 'white',
        marginHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 30
    },
    arrows: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: 15,
        marginBottom: 20,

    },
    text: {
        fontSize: 24,
        marginBottom: 10
    },
    inputs: {
        //flex: 9,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 30
    },
    imageButton: {
        backgroundColor: '#EAF4FA',
        marginHorizontal: 30,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 9
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.65,
        shadowRadius: 10,
    },
})