import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WordInformationScreen from '../../screens/WordInformationScreen';
import WordsScreen from '../../screens/WordsScreen';
import { Button, StyleSheet } from 'react-native';
import EditScreen from '../../components/EditComponents/EditScreen';


const WStack = createNativeStackNavigator();

function WordsStack() {
    return (
        <WStack.Navigator initialRouteName="WordsScreen">
            <WStack.Screen
                options={{ headerShown: false }}
                name="WordsScreen" component={WordsScreen}
            />
            <WStack.Screen
                name="WordInformationScreen"
                component={WordInformationScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerBackTitleVisible:false,
                    headerStyle: {
                        backgroundColor:'#C5E7EE'
                    },
                    // Add a placeholder button without the `onPress` to avoid flicker
                    headerRight: () => <Button title="Delete" />
                  })
                }
                

            />
            <WStack.Screen name="EditScreen"
                           component={EditScreen}
                           options={{
                               title: "Edit",
                               headerStyle: {
                                backgroundColor:'#C5E7EE'
                            },
                           }} />
        </WStack.Navigator>
    );
}

export default WordsStack;

const styles = StyleSheet.create({
  trash: {
    height: 20,
    width: 25,
    marginRight: 7,
  },
});