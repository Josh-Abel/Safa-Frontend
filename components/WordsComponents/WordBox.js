import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';


function WordBox(props) {
    return (
        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD"  onPress={() => props.navigate("WordInformationScreen",{data:props.data.item,})} >
        <View style={styles.wordContainer}>
                <Text style={styles.word}>{props.data.item.english}</Text>
                <Text style={styles.word}>{props.data.item.hebrew_nikkud}</Text>
        </View>
        </TouchableHighlight>
    );
};

export default WordBox;

const styles = StyleSheet.create({
    wordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 15,
        borderTopWidth: 0.3,
        borderBottomWidth: 0.3,
        borderColor: 'grey',
        backgroundColor: 'white',
    },
    word: {
        fontSize: 18,
    }
})