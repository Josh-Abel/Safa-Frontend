import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const CIRCLE_SIZE = 55;

function LittleNext(props) {

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate(props.to)}>
            <View style={[styles.circleContainer]}>
                <View style={[styles.circle]}>

                    <View style={styles.circle, styles.circleButton}>
                        <AntDesign name='arrowright' size={25} color={'white'} />
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    );
};
export default LittleNext;

const styles = StyleSheet.create({
    circle: {
        backgroundColor: 'black',
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
    }
})