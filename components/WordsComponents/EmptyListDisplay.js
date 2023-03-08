import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


function EmptyListDisplay(props) {
    return (
        <View style={styles.buttonBox}>
            <TouchableOpacity onPress={() => props.navigate("Add")}>
                <View style={[styles.button, styles.shadowProp]}>
                    <Text style={{ fontSize: 20 }}>Add Words!</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
};

export default EmptyListDisplay;

const styles = StyleSheet.create({
    buttonBox:{
        flex:1, 
        justifyContent:'center',
        paddingVertical:30,
        backgroundColor: '#C5E7EE'
    },
    button: {
        backgroundColor: '#EAF4FA',
        marginHorizontal: 30,
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderRadius: 9,
        alignItems:'center',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.65,
        shadowRadius: 10,
    },
})