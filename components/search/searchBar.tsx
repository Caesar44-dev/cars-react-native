// modules
import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";

// icons
import { Feather } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

// utils
import { width } from "../../utils/display";

const SearchBar = ({ searchPhrase, setSearchPhrase }: any) => {
    return (
        <View
            style={{
                width: width * 0.85,
            }}
            className="w-full p-1 bg-white rounded-xl flex flex-row justify-center items-center shadow-xl shadow-gray-400"
        >
            <View
                style={{
                    width: width * 0.6,
                }}
                className="flex flex-col justify-center items-center">
                <View
                    className="w-full h-[50px] px-2 flex flex-row justify-center items-center"
                >
                    <Ionicons name={"ellipsis-vertical"} size={20} color={"black"} />
                    <TextInput
                        className="flex-1 mx-2 text-base text-color-02"
                        placeholder="Your Current Location"
                        value={searchPhrase}
                        onChangeText={setSearchPhrase}
                    />
                </View>
                <View
                    className="w-full h-[50px] px-2 bg-white rounded-xl flex flex-row justify-start items-center"
                >
                    <SimpleLineIcons name={"location-pin"} size={20} color={"black"} />
                    <Text className="text-xs text-gray-600 ml-2">2464 Royal Ln. Mesa, New Jersey 45463</Text>
                </View>
            </View>
            <View
                style={{
                    width: width * 0.2,
                }}
                className="ml-2 flex justify-center items-center"
            >
                <TouchableOpacity
                    // onPress={}
                    className="flex justify-center items-center w-14 h-14 rounded-full bg-gray-300"
                >
                    <Feather
                        name={"search"}
                        size={30}
                        color={"black"}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SearchBar;