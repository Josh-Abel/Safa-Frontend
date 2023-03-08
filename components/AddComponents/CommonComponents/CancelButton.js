import { View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BinyanInputContext, POSInputContext, GenderInputContext, EnglishInputContext, HebrewInputContext, ShoreshInputContext, NotesInputContext, ImageInputContext, ExampleInputContext } from '../AddContexts.js';
import { useContext, useEffect } from 'react';


const CIRCLE_SIZE = 55;

function CancelButton() {

    const { pos, setPOS } = useContext(POSInputContext);
    const { binyan, setBinyan } = useContext(BinyanInputContext);
    const { gender, setGender } = useContext(GenderInputContext);
    const [englishInput, setEnglishInput] = useContext(EnglishInputContext);
    const [hebrewInput, setHebrewInput] = useContext(HebrewInputContext);
    const [shoreshInput, setShoreshInput] = useContext(ShoreshInputContext);
    const [exampleInput, setExampleInput] = useContext(ExampleInputContext);
    const [notesInput, setNotesInput] = useContext(NotesInputContext);
    const [image, setImage] = useContext(ImageInputContext);


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


    // return (
    //     // <TouchableOpacity onPress={CancelHandler}>
    //     //     <MaterialCommunityIcons name='cancel' size={50} color={'red'} />
    //     // </TouchableOpacity>
    //     <Button title="Cancel" onPress={CancelHandler} />
    // );
};
export default CancelButton;

