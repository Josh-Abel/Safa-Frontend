import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RememberInfoScreen from '../../components/HomeComponents/RemberInfoScreen';
import VerbDisplay from '../../components/POS/Verb/VerbDisplay';
import HomeScreen from '../../screens/HomeScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator initialRouteName="HomeStack">
            <HomeStack.Screen
                options={{ headerShown: false }}
                name="HomeStack" component={HomeScreen}
            />
            <HomeStack.Screen
                options={{
                    headerBackTitleVisible: false,
                    title: "Safa",
                    headerTitleStyle: { fontFamily: 'ExpletusSans-Medium' },
                    headerStyle: {
                        backgroundColor: '#C5E7EE',
                    },
                }}
                name="Remember"
                component={RememberInfoScreen} />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;