import {View, Text, Modal, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import * as Contexts from './RefresherContext';
import config from '../../config.js';


function EditModal(props) {
    const {data, id, word, type, visible, onRequestClose} = props;
    const [text, setText] = useState(word);

    const [refresher, setRefresher] = useContext(Contexts.RefresherContext);

    useEffect(() => {
        setText(word);
      }, [visible]);

    const CancelHandler = () => {
        setText(word);
        onRequestClose();

    }

    const SaveHandler = async (id,type) => {
        try {
            data[type] = text;
            const res = await axios.put(`${config.API_URL}/cards/${id}/`, data);
            setRefresher(!refresher);
        } catch (error) {
            console.log(error.message);
        }
        onRequestClose();
    }

    return (
        <Modal
                visible={visible}
                onRequestClose={onRequestClose}
                transparent={true}
                animationType='slide'>
                    
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingHorizontal: 20 }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width:'80%' }}>
          <Text style={{ marginBottom: 10, fontSize:20, color:'grey' }}>Edit:</Text>
          <TextInput
            label={word}
            value={text}
            mode="outlined"
            activeOutlineColor='#4A7DAA'
            outlineColor='#4A7DAA'
            style={{ marginBottom: 10, backgroundColor: 'white', fontSize:22 }}
            onChangeText={(text) => setText(text)}
          />
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <TouchableOpacity onPress={CancelHandler} style={[styles.button, styles.buttonClose]}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => SaveHandler(id,type)} style={[styles.button, styles.buttonClose]}>
            <Text style={styles.textStyle}>Save</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
    )
}

export default EditModal;

const styles = StyleSheet.create({
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
  });