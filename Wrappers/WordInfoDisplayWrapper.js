import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

function WordInfoDisplayWrapper(props) {
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView style={styles.scrollContainer} contentOffset={{ x: 0, y: -15 }} contentInset={{ top: 15, left: 0, bottom: tabBarHeight + 40, right: 0 }}>
                {props.children}
            </ScrollView>
        </SafeAreaView>
    );
};

export default WordInfoDisplayWrapper;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#C5E7EE',
    },
    scrollContainer: {
        flex: 1,
        paddingHorizontal: 30,
        //backgroundColor: 'pink',
        //borderWidth: 1,
        //marginBottom: 20,
        marginRight: 5,
        marginLeft: -7,
        marginTop: 5,
        paddingLeft: 25,
    },
})