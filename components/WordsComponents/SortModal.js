import {View, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import { Divider, Text } from 'react-native-paper';
import config from '../../config.js';



function SortModal(props) {
    const {getApi, setGetApi,visible, onRequestClose} = props;

    const CancelHandler = () => {
        onRequestClose();

    }

    const sortHandler = (type) => {
        const newApi = `${config.API_URL}/cards/?sort_by=` + type
        setGetApi(newApi);
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
          <Text style={{ marginBottom: 10, fontSize:30, color:'grey' }}>Sort:</Text>
          <Divider />
          <TouchableOpacity onPress={() => sortHandler("-timestamp")}><View><Text style={{ padding : 10, fontSize:20, marginVertical:5 }}>Most Recent (default)</Text></View></TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => sortHandler("timestamp")}><View><Text style={{ padding : 10, fontSize:20, marginVertical:5 }}>Least Recent</Text></View></TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => sortHandler("english")}><View><Text style={{ padding : 10, fontSize:20, marginVertical:5 }}>English (A -&gt; Z)</Text></View></TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => sortHandler("-english")}><View><Text style={{ padding : 10, fontSize:20, marginVertical:5 }}>English (Z -&gt; A)</Text></View></TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => sortHandler("hebrew")}><View><Text style={{ padding : 10, fontSize:20, marginVertical:5 }}>Hebrew (א -&gt; ת)</Text></View></TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => sortHandler("-hebrew")}><View><Text style={{ padding : 10, fontSize:20, marginBottom:20 }}>Hebrew (ת -&gt; א)</Text></View></TouchableOpacity>
          <TouchableOpacity onPress={CancelHandler} style={[styles.button, styles.buttonClose]}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>
             
        </View>
      </View>
    </Modal>
    )
}

export default SortModal;

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