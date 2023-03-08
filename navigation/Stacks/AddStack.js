import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExampleImageScreen from '../../components/AddComponents/Addscreens/ExampleImageScreen';
import NotesInputScreen from '../../components/AddComponents/Addscreens/NotesInputScreen';
import RootInputScreen from '../../components/AddComponents/Addscreens/RootInputScreen';
import BasicFormScreen from '../../components/AddComponents/Addscreens/BasicFormScreen.js';
import { Button, View } from 'react-native';
import CancelButton from '../../components/AddComponents/CommonComponents/CancelButton';

const AddStackNav = createNativeStackNavigator();

function AddStack() {
    return (
        <AddStackNav.Navigator
            initialRouteName="BasicForm"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#C5E7EE',
                },
                headerBackVisible: false,
            }}>
            <AddStackNav.Screen
                options={{
                    title: "Add",
                }}
                name="BasicForm" component={BasicFormScreen}
            />
            <AddStackNav.Screen
                options={{
                    title: "Root Form",
                    headerRight: () => (<Button title="Cancel" />)
                }}
                name="RootInput"
                component={RootInputScreen}
            />
            <AddStackNav.Screen
                options={{
                    title: "Example & Image",
                    headerRight: () => (<Button title="Cancel" />)
                }}
                name="ExampleImage"
                component={ExampleImageScreen} />
            <AddStackNav.Screen
                options={{
                    title: "Notes",
                    headerRight: () => (<Button title="Cancel" />)
                }}
                name="Notes"
                component={NotesInputScreen} />
        </AddStackNav.Navigator>
    );
}

export default AddStack;