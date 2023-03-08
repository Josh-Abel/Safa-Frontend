import { StyleSheet, SafeAreaView } from 'react-native';
import AddStack from '../navigation/Stacks/AddStack.js';
import { useState } from 'react';
import { createContext } from "react";
import { BinyanInputContext, POSInputContext, GenderInputContext, EnglishInputContext, HebrewInputContext, ShoreshInputContext, NotesInputContext, ImageInputContext, ExampleInputContext } from '../components/AddComponents/AddContexts.js';


function AddScreen() {
    const [pos, setPOS] = useState(null);
    const [binyan, setBinyan] = useState(null);
    const [gender, setGender] = useState(null);
    const [englishInput, setEnglishInput] = useState("");
    const [hebrewInput, setHebrewInput] = useState("");
    const [shoreshInput, setShoreshInput] = useState("");
    const [exampleInput, setExampleInput] = useState("");
    const [notesInput, setNotesInput] = useState("");
    const [image, setImage] = useState(null);



    return (

        <SafeAreaView style={{ flex: 1 }}>
            <POSInputContext.Provider value={{ pos, setPOS }}>
                <BinyanInputContext.Provider value={{ binyan, setBinyan }}>
                    <GenderInputContext.Provider value={{ gender, setGender }}>
                        <EnglishInputContext.Provider value={[englishInput, setEnglishInput]}>
                            <HebrewInputContext.Provider value={[hebrewInput, setHebrewInput]}>
                                <ShoreshInputContext.Provider value={[shoreshInput, setShoreshInput]}>
                                    <ExampleInputContext.Provider value={[exampleInput, setExampleInput]}>
                                        <ImageInputContext.Provider value={[image, setImage]}>
                                            <NotesInputContext.Provider value={[notesInput, setNotesInput]}>
                                                <AddStack />
                                            </NotesInputContext.Provider>
                                        </ImageInputContext.Provider>
                                    </ExampleInputContext.Provider>
                                </ShoreshInputContext.Provider>
                            </HebrewInputContext.Provider>
                        </EnglishInputContext.Provider>
                    </GenderInputContext.Provider>
                </BinyanInputContext.Provider>
            </POSInputContext.Provider>
        </SafeAreaView>
    )
};

export default AddScreen;

const styles = StyleSheet.create({

});
