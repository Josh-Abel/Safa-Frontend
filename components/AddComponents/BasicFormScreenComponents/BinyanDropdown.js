import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';

function BinyanDropdown(props) {
    const { binyan, setBinyan } = props;
    const [isFocus, setIsFocus] = useState(false);

    let BinyanData = [{
        label: 'PAAL', value: "PAAL"
    }, {
        label: 'PIEL', value: "PIEL"
    }, {
        label: 'HIFIL', value: "HIFIL"
    }, {
        label: 'HITPAEL', value: "HITPAEL"
    }, {
        label: 'NIFIL', value: "NIFIL"
    }];
    return (
        <View style={{ alignItems: 'center' }}>
            <Dropdown
                style={[styles.dropdown, styles.shadowProp, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                itemTextStyle={styles.posListTextStyle}
                data={BinyanData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Binyan' : '...'}
                value={binyan}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    if (item.value === binyan) {
                        setBinyan(null);
                        console.log(null)
                    } else {
                        setBinyan(item.value);
                        console.log(item.value)
                    }
                }}
            />
        </View>)
};

export default BinyanDropdown;

const styles = StyleSheet.create({
    dropdown: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 15,
        marginTop: 15,
        width: 200,
        backgroundColor: '#EAF4FA'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.65,
        shadowRadius: 10,
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
