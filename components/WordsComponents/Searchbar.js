// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

function Searchbar() {
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");

    return (
        <View style={styles.container}>
            <View
                style={
                    clicked
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked
                }
            >
                {/* search Icon */}
                <Feather
                    name="search"
                    size={20}
                    color="grey"
                    style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="To speak or לדבר"
                    value={searchPhrase}
                    clearButtonMode='while-editing'
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <View>
                    <Button
                        title="Cancel"
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                            setSearchPhrase("")
                        }}
                    ></Button>
                </View>
            )}
        </View>
    );
};
export default Searchbar;

// styles
const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginLeft: 25,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        borderColor: "#4A7DAA",
        borderWidth: 3,
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "85%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderColor: "#4A7DAA",
        borderWidth: 3,
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
});