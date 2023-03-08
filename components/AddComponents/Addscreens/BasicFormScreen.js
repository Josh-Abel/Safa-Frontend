import { View, Text, StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
import POSDropdown from '../BasicFormScreenComponents/POSDropdown';
import BinyanDropdown from '../BasicFormScreenComponents/BinyanDropdown';
import GenderDropdown from '../BasicFormScreenComponents/GenderDropdown';
import NextButton from '../BasicFormScreenComponents/NextButton';
import CompletionCircle from '../CommonComponents/CompletionCircle';
// import { BinyanInputContext, GenderInputContext, POSInputContext } from '../../../screens/AddScreen';
import { BinyanInputContext, POSInputContext, GenderInputContext } from '../AddContexts.js'

function BasicFormScreen({ navigation }) {

    const { pos, setPOS } = useContext(POSInputContext);
    const { binyan, setBinyan } = useContext(BinyanInputContext);
    const { gender, setGender } = useContext(GenderInputContext);

    function POSTypeHandler() {
        if (pos === 'V') {
            return <BinyanDropdown binyan={binyan} setBinyan={setBinyan} />
        } else if (pos === 'N') {
            return <GenderDropdown gender={gender} setGender={setGender} />
        } else {
            console.log('POS is neither')
        }
    };
    //style={{ flexDirection: 'column', flex: 1, justifyContent: 'center' }}
    return (
        <View style={styles.mainContainer}>
            <View style={styles.statusBar}>
                <CompletionCircle color='#999999' />
                <CompletionCircle color="#EEEEEE" />
                <CompletionCircle color="#EEEEEE" />
                <CompletionCircle color="#EEEEEE" />
            </View>
            <View style={styles.dropdowns}>
                <View style={styles.posDropdown}><POSDropdown pos={pos} setPOS={setPOS} /></View>
                <View style={styles.sumFormDropdown}>{POSTypeHandler()}</View>
            </View>
            <View style={styles.next}>
                <NextButton navigation={navigation} />
            </View>
        </View>
    );
};

export default BasicFormScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#C5E7EE'
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
    dropdowns: {
        flex: 100,
        justifyContent: 'center'
    },
    posDropdown: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    sumFormDropdown: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    next: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20
    }
});