import * as Contexts from '../AddContexts'
import { useContext } from 'react';

const { pos, setPOS } = useContext(Contexts.POSInputContext);
const { binyan, setBinyan } = useContext(Contexts.BinyanInputContext);
const { gender, setGender } = useContext(Contexts.GenderInputContext);
const [englishInput, setEnglishInput] = useContext(Contexts.EnglishInputContext);
const [hebrewInput, setHebrewInput] = useContext(Contexts.HebrewInputContext);
const [shoreshInput, setShoreshInput] = useContext(Contexts.ShoreshInputContext);
const [exampleInput, setExampleInput] = useContext(Contexts.ExampleInputContext);
const [notesInput, setNotesInput] = useContext(Contexts.NotesInputContext);
const [image, setImage] = useContext(Contexts.ImageInputContext);


const CancelHandler = ({ navigation }) => {
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

};

export default CancelHandler;