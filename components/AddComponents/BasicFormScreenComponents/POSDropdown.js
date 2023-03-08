import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';

function POSDropdown(props) {
    const { pos, setPOS } = props;
    const [isFocus, setIsFocus] = useState(false);

    let POSData = [{
        label: 'Verb', value: "V"
    }, {
        label: 'Noun', value: "N"
    }, {
        label: 'Adjective', value: "Adj"
    }, {
        label: 'Other', value: "Other"
    }];
    return (
        <View style={{ alignItems: 'center' }}>
            <Dropdown
                style={[styles.dropdown, styles.shadowProp, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                itemTextStyle={styles.posListTextStyle}
                data={POSData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Part of Speech' : '...'}
                value={pos}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    if (item.value === pos) {
                        setPOS(null);
                    } else {
                        setPOS(item.value);
                    }
                }}
            />
        </View>)
};

export default POSDropdown;

const styles = StyleSheet.create({
    dropdown: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 15,
        marginTop: 15,
        width: 300,
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
