// modules
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Calendar } from 'react-native-calendars';

// icons
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

// utils
import { width } from '../utils/display';
import { goBack } from '../utils/RootNav';

const Screen02 = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");

    const [selectedBtn01, setSelectedBtn01] = useState(false)
    const [selectedBtn02, setSelectedBtn02] = useState(false)
    const [selectedBtn03, setSelectedBtn03] = useState(false)
    const [selectedBtn04, setSelectedBtn04] = useState(false)
    const [selectedBtn05, setSelectedBtn05] = useState(false)

    const btns = [
        {
            time: "8am",
            setSelectedBtn: setSelectedBtn01,
            selectedBtn: selectedBtn01
        },
        {
            time: "9am",
            setSelectedBtn: setSelectedBtn02,
            selectedBtn: selectedBtn02
        },
        {
            time: "10am",
            setSelectedBtn: setSelectedBtn03,
            selectedBtn: selectedBtn03
        },
        {
            time: "11am",
            setSelectedBtn: setSelectedBtn04,
            selectedBtn: selectedBtn04
        },
        {
            time: "12pm",
            setSelectedBtn: setSelectedBtn05,
            selectedBtn: selectedBtn05
        },
    ]

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <View className="w-full flex flex-col justify-center items-center pt-10">
                    <View
                        style={{
                            width: width * 0.85,
                        }}
                        className="flex flex-col justify-center items-center"
                    >
                        <TouchableOpacity
                            onPress={() => goBack()}
                            activeOpacity={0.5}
                            className="p-2 bg-gray-200 rounded-full absolute left-2 top-0"
                        >
                            <Feather name={"x"} size={20} color={"black"} />
                        </TouchableOpacity>
                        <Text className="text-xl text-gray-600 font-bold mt-10">Booking Date & Time</Text>
                        <View
                            style={{
                                width: width * 0.85,
                            }}
                            className="flex flex-row justify-center items-start mt-10 border border-gray-300 p-4 rounded-3xl"
                        >
                            <View
                                style={{
                                    width: width * 0.625,
                                }}
                                className="flex flex-col justify-center items-start"
                            >
                                <Text className="text-sm text-gray-600 font-bold">Book Instantly</Text>
                                <Text className="text-xs text-gray-400">Book Instantly Book without waiting for renter approval</Text>
                            </View>
                            <View
                                style={{
                                    width: width * 0.125,
                                }}
                                className="flex flex-col justify-center items-end"
                            >
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => setIsEnabled(!isEnabled)}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                        <Calendar
                            style={{
                                width: width * 0.85,
                            }}
                            className="p-2 mt-6 border border-gray-300 rounded-3xl"
                            onDayPress={(e) => setSelectedDate(e.dateString)}
                            markedDates={{
                                [selectedDate]: { selected: true, selectedColor: '#f5f5f5' }
                            }}
                        />
                        <View
                            style={{
                                width: width * 0.85,
                            }}
                            className="flex flex-col justify-center items-start mt-4"
                        >
                            <Text className="text-base text-gray-400 mb-2">Time: </Text>
                            <View
                                style={{
                                    width: width * 0.85,
                                }}
                                className="flex flex-row justify-center items-center gap-2"
                            >
                                {btns.map((data, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => data.setSelectedBtn(!data.selectedBtn)}
                                        activeOpacity={0.5}
                                        style={{
                                            width: width * 0.14,
                                            borderColor: data.selectedBtn ? "#FDE047" : "#fff",
                                        }}
                                        className={"py-2 px-1 rounded-lg border flex justify-center items-center"}
                                    >
                                        <Text className={"text-xs font-semibold text-gray-600"}>
                                            {data.time}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <TouchableOpacity
                                // onPress={}
                                activeOpacity={0.8}
                                style={{
                                    width: width * 0.85
                                }}
                                className={"bg-yellow-300 py-3 px-6 mt-4 mb-6 rounded-lg shadow-md flex justify-center items-center"}
                            >
                                <Text className={"text-lg font-semibold text-gray-600"}>
                                    Book Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Screen02;