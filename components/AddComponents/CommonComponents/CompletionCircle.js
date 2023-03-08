import { StyleSheet, View } from "react-native";

const CIRCLE_SIZE = 20;

function CompletionCircle(props) {
    return <View style={[styles.circle, { backgroundColor: props.color }]}></View>
};

export default CompletionCircle;

const styles = StyleSheet.create({
    circle: {
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