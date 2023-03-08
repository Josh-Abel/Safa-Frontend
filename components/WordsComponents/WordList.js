import { View, StyleSheet, TouchableOpacity, Animated,Dimensions } from 'react-native';
import WordBox from './WordBox';
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import config from '../../config.js';




function WordList(props) {

    const {data,setData,loading,fetchApi, setDataExists, navigate} = props;


    const deleteData = async (rowKey) => {
        try {
            const res = await axios.delete(`${config.API_URL}/cards/${rowKey}/`);
        } catch (error) {
            console.log(error.message);
        }
    }
                      
    // const tabBarHeight = useBottomTabBarHeight();

    const renderData = (data, rowMap) => {return (<WordBox data={data} navigate={navigate} />)}

    const closeRow = (rowMap, rowKey) => {
        if(rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    }

    const dataLengthHandler = () => {
            setDataExists(data.length > 0);
    }

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap,rowKey);
        setData((prevData) => prevData.filter((item) => item.id !== rowKey));
        //dataLengthHandler();
        
        // DELETE DATA with AXIOS
        deleteData(rowKey);
    }

    const HiddenItemWithActions = props => {
        const {swipeAnimatedValue, onClose, onDelete} = props;
        return (
            <View style={styles.rowBack}>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} onPress={onClose}>
                    <MaterialCommunityIcons name="close-circle-outline" size={20} color="#fff" style={styles.trash} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={onDelete}>
                    <Animated.View style={[
                  styles.trash,
                  {
                    transform: [
                      {
                        scale: swipeAnimatedValue.interpolate({
                          inputRange: [-90, -45],
                          outputRange: [1, 0],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  },
                ]}>
                        <MaterialCommunityIcons name="trash-can-outline" size={20} color="#fff" />
                    </Animated.View>
                </TouchableOpacity>
            </View>
        )
    }

    const renderHidden = (data, rowMap) => {
        return (
            <HiddenItemWithActions 
            data={data}
            rowMap={rowMap}
            onClose={() => closeRow(rowMap, data.item.id)}
            onDelete={() => deleteRow(rowMap, data.item.id)}
            />
        )
    };

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        if (
            value < -Dimensions.get('window').width &&
            !this.animationIsRunning
        ) {
            this.animationIsRunning = true;
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 100,
            }).start(() => {
                const newData = [...data];
                const prevIndex = data.findIndex(item => item.id === key);
                newData.splice(prevIndex, 1);
                setListData(newData);
                this.animationIsRunning = false;
            });
        }
    };


    return (

        <SwipeListView 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderData}
            renderHiddenItem={renderHidden}
            disableRightSwipe
            leftOpenValue={0}
            rightOpenValue={-155}
            onSwipeValueChange={onSwipeValueChange}
            useNativeDriver={false}
            onRefresh={() => fetchApi()}
            refreshing={loading}
            />

    

    );
};

export default WordList;

const styles = StyleSheet.create({
      rowBack: {
      alignItems: 'center',
      backgroundColor: '#DDD',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
      marginHorizontal: 5,
      marginVertical: 1,
      borderRadius: 5,
    },
    backRightBtn: {
      alignItems: 'flex-end',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 75,
      paddingRight: 17,
    },
    backRightBtnLeft: {
      backgroundColor: '#1f65ff',
      right: 75,
    },
    backRightBtnRight: {
      backgroundColor: 'red',
      right: 0,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    trash: {
      height: 20,
      width: 25,
      marginRight: 7,
    },
  });