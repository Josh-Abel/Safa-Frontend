import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import NounDisplay from '../components/POS/Noun/NounDisplay.js';
import VerbDisplay from '../components/POS/Verb/VerbDisplay.js';
import AdjectiveDisplay from '../components/POS/Adjective/AdjectiveDisplay.js';
import OtherDisplay from '../components/POS/Other_/OtherDisplay.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import { createContext } from 'react';
import { RefresherContext } from '../components/EditComponents/RefresherContext.js';
import config from '../config.js';




export default function WordInformationScreen({ navigation, route }) {
    const {data} = route.params;
    const [refresher, setRefresher] = useState(false); 
    // This refresher will allow us to refresh the page whenever something is updated. The state changes in the EditModal.js.
    // The state change allows the screen to rerender since this is basically the top parent screen for the word's display.


    const deleteData = async (rowKey) => {
        try {
            const res = await axios.delete(`${config.API_URL}/cards/${rowKey}/`);
        } catch (error) {
            console.log(error.message);
        }
    }

    const DeleteButtonHandler = (navigate) => {
        navigate("WordsScreen");
        deleteData(data.id);
    }

    function DeleteButton({ navigation }) {
        return (
          <TouchableOpacity onPress={() => DeleteButtonHandler(navigation.navigate)}>
            <MaterialCommunityIcons name="trash-can-outline" size={30} color="#b22222" />
          </TouchableOpacity>
        );
      }

      const EditButtonHandler = (navigate) => {
        navigate("EditScreen");
    }

    function EditButton({ navigation }) {
        return (
          <TouchableOpacity onPress={() => EditButtonHandler(navigation.navigate)}>
            <MaterialCommunityIcons name="pencil" size={30} color="blue" />
          </TouchableOpacity>
        );
      }

    

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
          headerRight: () => (
              <View style={{flexDirection:'row'}}>
                <View style={{marginRight:20}}><EditButton navigation={navigation} /></View>
                <View style={{marginRight:5}}><DeleteButton navigation={navigation} /></View>
              </View>
          ),
        });
      }, [navigation]);
      
    const GenerateWordCardHandler = () => {
        if (data.pos === "V") {
            return(
                <VerbDisplay data={data}/>
            )
        } else if (data.pos === "N") {
            return <NounDisplay data={data} />
        } else if (data.pos === "Adj") {
           return <AdjectiveDisplay data={data} />
        } else if (data.pos === "Other") {
            return <OtherDisplay data={data} />
        }
    }
    

    return (
        <RefresherContext.Provider value={[refresher, setRefresher]}>
            {GenerateWordCardHandler()}
        </RefresherContext.Provider>
    )
    // const [isFocus, setIsFocus] = useState(false);
    // const [pos, setPOS] = useState(null);

    // let POSData = [{
    //     label: 'Verb', value: "V"
    // }, {
    //     label: 'Noun', value: "N"
    // }, {
    //     label: 'Adjective', value: "Adj"
    // }, {
    //     label: 'Other', value: "Other"
    // }];

    // function posTemplateInputHandler() {
    //     if (pos === "N") {
    //         return (
    //             <View>
    //                 {/* <Text > NOUN TEMPLATE</Text > */}
    //                 <NounDisplay />
    //             </View >
    //         );
    //     } else if (pos === "V") {
    //         return (
    //             <View>
    //                 {/* <Text>VERB TEMPLATE</Text> */}
    //                 <VerbDisplay />
    //             </View>
    //         );
    //     } else if (pos === "Adj") {
    //         return (
    //             <View>
    //                 {/* <Text>ADJECTIVE TEMPLATE</Text> */}
    //                 <AdjectiveDisplay />
    //             </View>
    //         );
    //     } else if (pos === "Other") {
    //         return (
    //             <View>
    //                 {/* <Text>OTHER TEMPLATE</Text> */}
    //                 <OtherDisplay />
    //             </View>
    //         );
    //     }
    // }

    // return (
    //     <SafeAreaView style={styles.safeAreaContainer}>
    //         {/* <StatusBar style="auto" /> */}
    //         <View style={styles.container}>
    //             {/* <ScrollView style={styles.scrollContainer} contentOffset={{ x: 0, y: 1 }} contentInset={{ top: 15, left: 0, bottom: 20, right: 0 }}> */}
    //             <View>
    //                 <Dropdown
    //                     style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
    //                     placeholderStyle={styles.placeholderStyle}
    //                     selectedTextStyle={styles.selectedTextStyle}
    //                     itemTextStyle={styles.posListTextStyle}
    //                     //dropdownTextStyle={styles.dropdownTextStyle}
    //                     data={POSData}
    //                     maxHeight={300}
    //                     labelField="label"
    //                     valueField="value"
    //                     placeholder={!isFocus ? 'Select Part of Speech' : '...'}
    //                     value={pos}
    //                     onFocus={() => setIsFocus(true)}
    //                     onBlur={() => setIsFocus(false)}
    //                     onChange={item => {
    //                         if (item.value === pos) {
    //                             setPOS(null);
    //                             console.log(null)
    //                         } else {
    //                             setPOS(item.value);
    //                             console.log(item.value)
    //                         }
    //                     }}
    //                 />
    //             </View>


    //             <View>
    //                 <Text> {posTemplateInputHandler()} </Text>
    //             </View>
    //             {/* <Icon name="add-plus-button" height="40" width="40" /> */}
    //             {/* </ScrollView> */}
    //         </View>
    //     </SafeAreaView >
    // );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    safeAreaContainer: {
        flex: 1,
        //borderWidth: 5,
        //borderColor: 'red',
        backgroundColor: '#C5E7EE'
    },
    scrollContainer: {
        paddingHorizontal: 30,
        //backgroundColor: 'pink',
        //borderWidth: 1,
        marginBottom: 20,
        marginRight: 5,
        marginLeft: -7
    },
    dropdown: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 15,
        marginTop: 15,
        width: 300,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14
    },
    placeholderStyle: {
        fontSize: 20
    },
    selectedTextStyle: {
        fontSize: 20,
        textAlign: 'center',
        paddingLeft: 19
    },
    posListTextStyle: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
    },
});
