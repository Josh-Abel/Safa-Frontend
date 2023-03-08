import { View, Text, StyleSheet } from 'react-native';
import FormBlockWrapper from '../../Wrappers/FormBlockWrapper';
import {useState, useEffect} from 'react';

function RememberCard(props) {
    const {randomElement, pos, form } = props;

    

    

    return (
        <FormBlockWrapper boxType='infinitive'>
            <View style={styles.cardContainer}>
                <View><View><Text style={styles.shoreshText}>{randomElement.shoresh}</Text></View></View>
                <View style={styles.midPart}>
                    <View><Text style={styles.POSText}>{pos}</Text></View>
                    <View style={styles.wordContainer}><Text style={styles.wordText}>{randomElement.hebrew_nikkud}</Text></View>
                    <View style={styles.openContainer}><Text style={styles.openText}>Tap to Open Card</Text></View>
                </View>
                {form ? <View><View style={styles.structureContainer}><Text style={styles.structureText}>{form}</Text></View></View> : <View></View>}
            </View>
        </FormBlockWrapper>
    );
    // return (
    //     <FormBlockWrapper boxType='infinitive'>
    //         <View style={styles.cardContainer}>
    //             <View><View><Text style={styles.shoreshText}>ד-ב-ר</Text></View></View>
    //             <View style={styles.midPart}>
    //                 <View><Text style={styles.POSText}>Verb</Text></View>
    //                 <View style={styles.wordContainer}><Text style={styles.wordText}>לְדַבֵּר</Text></View>
    //                 <View style={styles.openContainer}><Text style={styles.openText}>Tap to Open Card</Text></View>
    //             </View>
    //             <View><View style={styles.structureContainer}><Text style={styles.structureText}>PIEL</Text></View></View>
    //         </View>
    //     </FormBlockWrapper>
    // );
};

export default RememberCard;

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
    },
    shoreshText: {
        color: '#6F6E6E',
        fontSize: 24,
        fontFamily: 'Arimo-Regular',
    },
    POSText: {
        color: '#6F6E6E',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Gelasio-Regular',
    },
    wordContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 18,
    },
    wordText: {
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'Arimo-Medium'
    },
    openContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 32,
        marginBottom: -8
    },
    openText: {
        color: '#7E7E7E',
        fontSize: 19,
        textAlign: 'center',
        fontFamily: 'Gelasio-Regular',
    },
    structureContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 6,
        paddingVertical: 3,
        marginTop: -3,
        marginHorizontal: -6,
        borderRadius: 15
    },
    structureText: {
        color: '#6F6E6E',
        fontSize: 24,
        fontFamily: 'Gelasio-Regular',
    },

})
