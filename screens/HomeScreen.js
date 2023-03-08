import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Alert, Button, SafeAreaView } from 'react-native';
import RememberCard from '../components/HomeComponents/RememberCard';
import * as Speech from 'expo-speech';
import React,{useState, useEffect} from 'react';
import { useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import config from '../config.js';



function HomeScreen({ navigation }) {
    const [randomElement, setRandomElement] = useState([]);
    const [pos, setPOS] = useState('');
    const [form, setForm] = useState('');

    const getRandomElement = async () => {
        try {
            const response = await axios.get(`${config.API_URL}/cards/random`);
            setRandomElement(response.data);
        } catch (error) {
            console.error(error.message);
        }
    };

    

    const posHandler = () => {
        if (randomElement.pos === 'V') {
            setPOS("Verb");
        } else if (randomElement.pos === 'N') {
            setPOS("Noun");
        } else {
            setPOS(randomElement.pos);
        }
    }

    const formHandler = () => {
        if (randomElement.pos === 'V') {
            setForm(randomElement.binyan);
        } else if (randomElement.pos === 'N') {
            setForm(randomElement.gender);
        }
    }

    useEffect(() => {
        getRandomElement();        
    }, []);

    useEffect(() => {
        setPOS("");
        setForm("");
        posHandler();
        formHandler();
    }, [randomElement])

    

    
    

    const speak = () => {
        const thingToSay = 'שפה';
        Speech.speak(thingToSay, { voice: 'com.apple.voice.compact.he-IL.Carmit' });
    };

    // const listAllVoiceOptions = async () => {
    //     let voices = await Speech.getAvailableVoicesAsync();
    //     console.log(voices);
    // };

    // useEffect(listAllVoiceOptions);

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.homeContainer}>
                <View style={styles.logoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText} onPress={speak}>Safa</Text>
                    </View>
                    <View><Image style={styles.image} source={require('../assets/images/lips3.png')} /></View>
                </View>
                <View style={styles.rememberContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.remember}>האם אתה זוכר את המילה הזאת?</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Remember', {
                        data:randomElement
                    })} activeOpacity={0.4}>
                        <RememberCard randomElement={randomElement} pos={pos} form={form} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;



const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    logoContainer: {
        alignItems: 'center',
    },
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#C5E7EE',
    },
    titleContainer: {
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    titleText: {
        fontSize: 70,
        fontFamily: 'ExpletusSans-Medium',
    },
    image: {
        height: 135,
        width: 255,
        marginTop: 40,
    },
    rememberContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    remember: {
        fontSize: 24,
        marginBottom: 15,
        fontFamily: 'Arimo-Regular',
    },
});

