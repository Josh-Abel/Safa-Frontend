import * as ImagePicker from 'expo-image-picker';
import { useContext, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ImageInputContext } from '../AddContexts';

function ImageImporter() {
    // const [image, setImage] = useState(null);

    const [image, setImage] = useContext(ImageInputContext);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={pickImage}><View style={[styles.imageButton, styles.shadowProp]}><Text style={{ fontSize: 20 }}>Import Image</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={[styles.imageButton, styles.shadowProp]}><Text style={{ fontSize: 20 }}>Generate Image</Text></View></TouchableOpacity>
            </View>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderWidth: 4, borderColor: "#4A7DAA", borderRadius: 10 }} />}
        </View>
    );
};

export default ImageImporter;

const styles = StyleSheet.create({
    imageButton: {
        backgroundColor: '#EAF4FA',
        marginHorizontal: 30,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 9
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.65,
        shadowRadius: 10,
    },
})