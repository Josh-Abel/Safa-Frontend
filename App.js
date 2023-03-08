//import { RENDER } from 'ci-info';
import { StatusBar } from 'expo-status-bar';
//import AppLoading from 'expo-app-loading';
//import { Dropdown } from 'react-native-material-dropdown';
import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen.js';
import WordInformationScreen from './screens/WordInformationScreen.js';
//import Icon from 'react-native-ico-material-design';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from '@expo/vector-icons/Ionicons';
import HomeStackScreen from './navigation/Stacks/HomeStack.js';
import AddScreen from './screens/AddScreen.js';
import CameraScreen from './screens/CameraScreen.js';
import TestScreen from './screens/TestScreen.js';
import WordsScreen from './screens/WordsScreen.js';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import WordsStack from './navigation/Stacks/WordsStack.js';


SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'ExpletusSans-Medium': require('./assets/fonts/ExpletusSans-Medium.ttf'),
    'Arimo-Medium': require('./assets/fonts/Arimo-Medium.ttf'),
    'Arimo-Regular': require('./assets/fonts/Arimo-Regular.ttf'),
    'Gelasio-Regular': require('./assets/fonts/Gelasio-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("FONT HAS NOT LOADED!");
    return null;
  } else {
    console.log("FONT HAS LOADED!");
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer} onLayout={onLayoutRootView}>
      < NavigationContainer NavigationBarBehavior='overlay-swipe'>

        <Tab.Navigator initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? <Ionicons name={'md-home'} size={30} color={color} />
                  : <Ionicons name={'md-home-outline'} size={30} color={color} />;;
              } else if (route.name === 'Add') {
                iconName = focused
                  ? <FontAwesome name={'plus-square'} size={30} color={color} />
                  : <FontAwesome name={'plus-square-o'} size={30} color={color} />;
              } else if (route.name === 'Words') {
                iconName = focused
                  ? <MaterialCommunityIcons name={'book-alphabet'} size={30} color={color} />
                  : <MaterialCommunityIcons name={'book-alphabet'} size={30} color={color} />;
              } else if (route.name === 'Camera') {
                iconName = focused
                  ? <FontAwesome name={'camera-retro'} size={30} color={color} />
                  : <FontAwesome name={'camera-retro'} size={30} color={color} />;
              } else if (route.name === 'Test') {
                iconName = focused
                  ? <Ionicons name={'school'} size={30} color={color} />
                  : <Ionicons name={'school-outline'} size={30} color={color} />;
              }
              return iconName;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#4A7DAA',
            tabBarShowLabel: false,
            headerStyle: {
              backgroundColor: '#C5E7EE',
            },
            headerTintColor: 'black',
            headerShown: false,
            headerShadowVisible: true,
            tabBarLabelStyle: { fontSize: 12.5, marginBottom: 5 },
            //tabBarItemStyle: { paddingTop: 15 },
            //tabBarIconStyle: { marginTop: 5 },
            tabBarStyle: {
              backgroundColor: "#C5E7EE",//'#4A7DAA',
              //position: 'absolute',
              marginBottom: -10,
              // paddingTop: 5,
              // paddingBottom: 10,
            }
          })}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Add" component={AddScreen} />
          {/* <Tab.Screen name="Words" component={WordsScreen} /> */}
          <Tab.Screen name="Words" component={WordsStack} />
          <Tab.Screen name="Camera" component={CameraScreen} />
          <Tab.Screen name="Test" component={TestScreen} />
        </Tab.Navigator>

      </NavigationContainer >
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#C5E7EE'

  },
  bottomBar: {
    width: 500,
    height: 85,
    backgroundColor: '#4A7DAA',
    marginBottom: -35,
  }
});