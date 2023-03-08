import { View, Image, Text, StyleSheet } from 'react-native';
import FormBlockWrapper from '../Wrappers/FormBlockWrapper';

function WordImage(props) {
    return (
        <FormBlockWrapper boxType='conj'>
            <View style={styles.titleContainer}><Text style={styles.titleText}>Image</Text></View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.imageLink} />
            </View>
        </FormBlockWrapper>
    );
};

export default WordImage;

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
        justifyContent: 'center',
    },
    titleContainer: {
        margin: 7,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
    },
    titleText: {
        color: 'grey',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 5,
    },
});