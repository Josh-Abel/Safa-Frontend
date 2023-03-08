import { View, StyleSheet } from 'react-native';

function FormBlockWrapper(props) {
    if (props.boxType === 'infinitive') {
        return <View style={[styles.infinitiveContainer, styles.shadowProp]}>{props.children}</View>
    } else if (props.boxType === 'conj') {
        return <View style={[styles.conj, styles.shadowProp]}>{props.children}</View>
    };

};

export default FormBlockWrapper;

const styles = StyleSheet.create({
    infinitiveContainer: {
        backgroundColor: '#EAF4FA',//'#E7F5FA',
        borderRadius: 13,
        padding: 5,
        width: 350,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //marginBottom: 20,
        paddingBottom: 10,
    },
    conj: {
        backgroundColor: '#EAF4FA', //'#E7F5FA',
        borderRadius: 13,
        padding: 5,
        width: 350,
        flexDirection: 'column',
        justifyContent: 'space-between',
        //marginBottom: 20,
        marginTop: 20,
        paddingBottom: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.65,
        shadowRadius: 10,
    }
});
