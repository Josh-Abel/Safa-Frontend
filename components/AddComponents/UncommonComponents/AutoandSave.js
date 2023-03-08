import { View, StyleSheet, TouchableOpacity, Modal, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { BinyanInputContext, POSInputContext, GenderInputContext, EnglishInputContext, HebrewInputContext, ShoreshInputContext, NotesInputContext, ImageInputContext, ExampleInputContext } from '../AddContexts.js';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config.js';


const CIRCLE_SIZE = 55;

function AutoandSave(props) {


    const { pos, setPOS } = useContext(POSInputContext);
    const { binyan, setBinyan } = useContext(BinyanInputContext);
    const { gender, setGender } = useContext(GenderInputContext);
    const [englishInput, setEnglishInput] = useContext(EnglishInputContext);
    const [hebrewInput, setHebrewInput] = useContext(HebrewInputContext);
    const [shoreshInput, setShoreshInput] = useContext(ShoreshInputContext);
    const [exampleInput, setExampleInput] = useContext(ExampleInputContext);
    const [notesInput, setNotesInput] = useContext(NotesInputContext);
    const [image, setImage] = useContext(ImageInputContext);

    const [showPopup, setShowPopup] = useState(false);
    const [dataIndex, setDataIndex] = useState(0);
    const [possibilityData, setPossibilityData] = useState([]);
    const [fullTranslation, setFullTranslation] = useState("");
    const [showTranslations, setShowTranslations] = useState(false)

   


    const PossibilityHandler = async () => {
        try {
            const res = await axios.get(`${config.API_URL}/cards/get_possibilities/` + hebrewInput + '/')
            setPossibilityData(res.data)
            if (res.data.length >= 2){
                setShowPopup(true);
            } else if(res.data.length == 1){
                 setFullTranslation(res.data[0]["English"]);
                 setShowTranslations(true);
            } else {
                FinishHandler(0, englishInput);
            }
        } catch (error) {
            console.log(error.message);
        }
    }


    const chosenWordHandler = (index, fullEnglish) => {
        
        setShowPopup(false);
        setShowTranslations(true);
        setDataIndex(index);
        setFullTranslation(fullEnglish);
    }

    const closePopup = () => {
        setShowPopup(false)
    }

    const skipPopup = () => {
        setShowPopup(false);
        FinishHandler(dataIndex,englishInput)
    }

    const closeTranslations = () => {
        setShowTranslations(false)
    }

    const replaceTranslationHandler = () => {
        setShowTranslations(false);
        FinishHandler(dataIndex,fullTranslation)
       
    }

    const concatTranslationHandler = () => {
        setShowTranslations(false);
        FinishHandler(dataIndex, englishInput + ", " + fullTranslation)
    }

    


    const FinishHandler = async (index, translation) => {
        try {
            const res = await axios.post(`${config.API_URL}/cards/`,{
                hebrew: hebrewInput,
                english: translation,
                shoresh: shoreshInput,
                pos: pos,
                binyan: binyan,
                gender: gender,
                example: exampleInput,
                note: notesInput,
                row_num: index,
                //image: image
            });
            props.navigation.popToTop();
            setPOS(null);
            setBinyan(null);
            setGender(null);
            setEnglishInput("");
            setHebrewInput("");
            setShoreshInput("");
            setExampleInput("")
            setNotesInput("");
            setImage(null);
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <View>
        

       <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopup}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <View style={{marginBottom:15}}><Text style={{fontSize:20, color:'grey'}}>Which word?</Text></View>
                {possibilityData.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => chosenWordHandler(index, item['English'])}>
                    <View style={styles.wordContainer}>
                        <Text style={styles.word}>{item['English']}</Text>
                        <Text style={[styles.word, {paddingTop:3}]}>{item["Hebrew-Niqqud"]}</Text>
                    </View>
                </TouchableOpacity>
            ))}
                    <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop:10}}>
                    <Pressable
                    style={[styles.button, styles.buttonClose, {marginRight:15}]}
                    onPress={() => closePopup()}>
                    <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                    <Pressable
                    style={[styles.button, styles.buttonClose, {marginLeft:15}]}
                    onPress={() => skipPopup()}>
                    <Text style={styles.textStyle}>Skip</Text>
                    </Pressable>
                    </View>
                </View>
                </View>
            </Modal>
        </View>

        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showTranslations}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <View style={{marginBottom:15}}><Text style={{fontSize:20, color:'grey'}}>Add Translation?</Text></View>
                
                    <View style={styles.wordContainer}>
                        <Text style={styles.word}>{fullTranslation}</Text>
                    </View>
 
                    <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop:10}}>
                    <Pressable
                    style={[styles.button, styles.buttonClose, {marginRight:15}]}
                    onPress={() => closeTranslations()}>
                    <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                    <Pressable
                    style={[styles.button, styles.buttonClose, {marginRight:15}]}
                    onPress={() => concatTranslationHandler()}>
                    <Text style={styles.textStyle}>Concat</Text>
                    </Pressable>
                    <Pressable
                    style={[styles.button, styles.buttonClose, {marginRight:15}]}
                    onPress={() => replaceTranslationHandler()}>
                    <Text style={styles.textStyle}>Replace</Text>
                    </Pressable>
                    <Pressable
                    style={[styles.button, styles.buttonClose, {marginRight:15}]}
                    onPress={() => FinishHandler(dataIndex, englishInput)}>
                    <Text style={styles.textStyle}>Skip</Text>
                    </Pressable>
                    
                    </View>
                </View>
                </View>
            </Modal>
        </View>

        <TouchableOpacity onPress={PossibilityHandler}>
            <View style={[styles.circleContainer]}>
                <View style={[styles.circle]}>

                    <View style={styles.circle, styles.circleButton}>
                        <FontAwesome5 name='flag-checkered' size={25} color={'white'} />
                    </View>

                </View>
            </View>
        </TouchableOpacity>
        </View>
        
    );
};
export default AutoandSave;

const styles = StyleSheet.create({
    circle: {
        backgroundColor: 'blue',
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        justifyContent: 'center',
    },
    circleButton: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        paddingHorizontal:15,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      wordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 15,
        borderTopWidth: 0.3,
        borderVerticleWidth: 0.3,
        borderColor: 'grey',
        backgroundColor: 'white',
    },
    word: {
        fontSize: 20,
        marginHorizontal:10
    }
})