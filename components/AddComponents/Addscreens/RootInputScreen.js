import { Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import LittleBack from '../CommonComponents/LittleBack';
import LittleNext from '../CommonComponents/LittleNext';
import WordInput from '../CommonComponents/WordInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CompletionCircle from '../CommonComponents/CompletionCircle';
import { useContext, useEffect } from 'react';
//import { EnglishInputContext, HebrewInputContext, ShoreshInputContext } from '../../../screens/AddScreen';
import * as Contexts from '../AddContexts'
//import CancelButton from '../CommonComponents/CancelButton';
//import CancelHandler from '../CommonComponents/CancelHandler';

function RootInputScreen({ navigation }) {


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
            {/* <CancelButton navigation={navigation} /> */}
            <View style={styles.statusBar}>
                <CompletionCircle color='#999999' />
                <CompletionCircle color='#999999' />
                <CompletionCircle color="#EEEEEE" />
                <CompletionCircle color="#EEEEEE" />
            </View>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                <KeyboardAwareScrollView contentContainerStyle={styles.inputs}>
                    <View>
                        <Text style={styles.text}>English:</Text>
                        <WordInput sample="To Speak, To talk" multiline={false} input={englishInput} setInput={setEnglishInput} value={englishInput} />
                    </View>
                    <View>
                        <Text style={styles.text}>Hebrew without Nikkud:</Text>
                        <WordInput sample="לדבר" multiline={false} input={hebrewInput} setInput={setHebrewInput}  value={hebrewInput} />
                    </View>
                    <View>
                        <Text style={styles.text}>Shoresh:</Text>
                        <WordInput sample="ד-ב-ר" multiline={false} input={shoreshInput} setInput={setShoreshInput} />
                    </View>



                </KeyboardAwareScrollView>
            </TouchableWithoutFeedback>
            <View style={styles.arrows}>
                <LittleBack navigation={navigation} />
                <LittleNext navigation={navigation} to="ExampleImage" />
            </View>
        </View>
    );
};

export default RootInputScreen;

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
    }
})