//import Searchbar from "../components/WordsComponents/Searchbar";
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
import WordList from "../components/WordsComponents/WordList";
import React,{ useState,useEffect } from 'react';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import EmptyListDisplay from "../components/WordsComponents/EmptyListDisplay";
import {Searchbar} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SortModal from '../components/WordsComponents/SortModal.js';
import config from '../config.js';


function WordsScreen({navigation}) {
    const [dataExists, setDataExists] = useState(true);
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [filteredData, setFilteredData] = useState(data);
    const [showSorter, setShowSorter] = useState(false);
    const [getApi, setGetApi] = useState(`${config.API_URL}/cards/`)


    const fetchApi = async () => {
        try {
            const res = await axios.get(getApi);
            setData(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    useFocusEffect(
        // Re-renders page when new word is added or when the sort type (getApi) changes
        React.useCallback(() => {
            fetchApi(); 
        }, [getApi])
    );

    useEffect(() => {
        setDataExists(data.length > 0);
    }, [data]);

    // useEffect(() => {
    //     // Refresh when sort changes
    //     console.log('sorted');
    // }, [getApi]);

    const [query, setQuery] = useState('');

    // const handleSearch = (text) => {
    //     setQuery(text);
    //     const filteredData = data.filter((item) => {
    //         const keys = Object.keys(item).filter((key) => key != 'id' && key !== 'timestamp' && key !== 'shoresh' && key !== 'pos' && key !== 'binyan' && key !== 'gender' && key !== 'example' && key !== 'note' && key !== 'image');
    //         for (const key of keys) {
    //             if (item[key].toLowerCase().includes(text.toLowerCase())){
    //                 return true;
    //             }
    //         }
    //         return false;
    //     });
    //     setFilteredData(filteredData);
    // };

    const handleSearch = (text) => {
        setQuery(text);
    };

    const filteredData = data.filter(
        (item) =>
          item.hebrew.toLowerCase().includes(query.toLowerCase()) ||
          item.english.toLowerCase().includes(query.toLowerCase()) ||
          (item.Noun_singularAbsolute && item.Noun_singularAbsolute.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Noun_pluralAbsolute && item.Noun_pluralAbsolute.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Noun_singularConstruct && item.Noun_singularConstruct.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Noun_pluralConstruct && item.Noun_pluralConstruct.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Adj_SM && item.Adj_SM.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Adj_SF && item.Adj_SF.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Adj_PM && item.Adj_PM.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Adj_PF && item.Adj_PF.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePresentSM && item.Verb_ActivePresentSM.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePresentSF && item.Verb_ActivePresentSF.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePresentPM && item.Verb_ActivePresentPM.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePresentPF && item.Verb_ActivePresentPF.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePastS1 && item.Verb_ActivePastS1.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePastP1 && item.Verb_ActivePastP1.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePastSM2 && item.Verb_ActivePastSM2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePastSF2 && item.Verb_ActivePastSF2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePastPM2 && item.Verb_ActivePastPM2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePastPF2 && item.Verb_ActivePastPF2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePastSM3 && item.Verb_ActivePastSM3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePastSF3 && item.Verb_ActivePastSF3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePastPM3 && item.Verb_ActivePastPM3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActivePastPF3 && item.Verb_ActivePastPF3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActiveFutureS1 && item.Verb_ActiveFutureS1.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActiveFutureP1 && item.Verb_ActiveFutureP1.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActiveFutureSM2 && item.Verb_ActiveFutureSM2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActiveFutureSF2 && item.Verb_ActiveFutureSF2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActiveFuturePM2 && item.Verb_ActiveFuturePM2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActiveFuturePF2 && item.Verb_ActiveFuturePF2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActiveFutureSM3 && item.Verb_ActiveFutureSM3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActiveFutureSF3 && item.Verb_ActiveFutureSF3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActiveFuturePM3 && item.Verb_ActiveFuturePM3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ActiveFuturePF3 && item.Verb_ActiveFuturePF3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ImperativeSM && item.Verb_ImperativeSM.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ImperativeSF && item.Verb_ImperativeSF.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ImperativePM && item.Verb_ImperativePM.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_ImperativePF && item.Verb_ImperativePF.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePresentSM && item.Verb_PassivePresentSM.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePresentSF && item.Verb_PassivePresentSF.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePresentPM && item.Verb_PassivePresentPM.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePresentPF && item.Verb_PassivePresentPF.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePastS1 && item.Verb_PassivePastS1.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePastP1 && item.Verb_PassivePastP1.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePastSM2 && item.Verb_PassivePastSM2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePastSF2 && item.Verb_PassivePastSF2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePastPM2 && item.Verb_PassivePastPM2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePastPF2 && item.Verb_PassivePastPF2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePastSM3 && item.Verb_PassivePastSM3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePastSF3 && item.Verb_PassivePastSF3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePastPM3 && item.Verb_PassivePastPM3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassivePastPF3 && item.Verb_PassivePastPF3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassiveFutureS1 && item.Verb_PassiveFutureS1.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassiveFutureP1 && item.Verb_PassiveFutureP1.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassiveFutureSM2 && item.Verb_PassiveFutureSM2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassiveFutureSF2 && item.Verb_PassiveFutureSF2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassiveFuturePM2 && item.Verb_PassiveFuturePM2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassiveFuturePF2 && item.Verb_PassiveFuturePF2.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassiveFutureSM3 && item.Verb_PassiveFutureSM3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassiveFutureSF3 && item.Verb_PassiveFutureSF3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassiveFuturePM3 && item.Verb_PassiveFuturePM3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, ""))) ||
            (item.Verb_PassiveFuturePF3 && item.Verb_PassiveFuturePF3.replace(/[\u0591-\u05C7]/g, "").includes(query.replace(/[\u0591-\u05C7]/g, "")))
      );
    
    if (dataExists) {
        return (
            <SafeAreaView style={{flex:1}}>
                {/* <View style={{ borderWidth: 0.3, borderColor: 'grey' }} ><Searchbar /></View> */}  
                <View>
                    <SortModal getApi={getApi} setGetApi={setGetApi} visible={showSorter} onRequestClose={() => setShowSorter(false)} />
                </View>
                <View style={{flexDirection:'row-reverse'}}>
                    <View style={{width:'15%', justifyContent:'center', alignItems:'center', backgroundColor:'#EEEEEE'}}>
                        <TouchableOpacity onPress={() => setShowSorter(true)}>
                            <MaterialCommunityIcons name="sort" size={35} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'85%'}}>
                        <Searchbar placeholder="To speak or לדבר" onChangeText={handleSearch} value={query} />
                    </View>
                </View>
                <View style={{backgroundColor:'white', flex:1}}><WordList data={filteredData} setData={setData} loading={loading} fetchApi={fetchApi} setDataExists={setDataExists} navigate={navigation.navigate}/></View>
                
           </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={{flex:1}}>
                <EmptyListDisplay navigate={navigation.navigate}/>
            </SafeAreaView>
        );
    }
};



export default WordsScreen;