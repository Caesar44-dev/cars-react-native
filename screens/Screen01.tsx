// modules
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Pressable, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import Modal01 from '../components/modal/Modal01';
import Modal02 from '../components/modal/Modal02';
import Modal03 from '../components/modal/Modal03';

// icons
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// utils
import { navigate } from '../utils/RootNav';
import { height, width } from '../utils/display';

const Screen01 = () => {

    const [isModalOpen01, setIsModalOpen01] = useState(false)
    const [isModalOpen02, setIsModalOpen02] = useState(false)
    const [isModalOpen03, setIsModalOpen03] = useState(false)

    const [dataModal03, setDataModal03] = useState({})

    const vehicles = [
        {
            id: 1,
            typeVehicle: 'Delivery',
            imageVehicle: require('../assets/images/cars/car(4).png'),
            nameVehicle: 'Mercedes-Benz AMG GT-63',
            direction: 'Automatic',
            occupants: '4 Seaters',
            gas: 'Fuel',
            price: 200,
            driverImage: require('../assets/images/woman.png'),
            driverName: "Peter Fisher",
            pickupAddress: "3891 Ranchview Dr.Richadson, California 62639"
        },
        {
            id: 2,
            typeVehicle: 'Delivery',
            imageVehicle: require('../assets/images/cars/car(5).png'),
            nameVehicle: 'Ranger Rover Sport 202',
            direction: 'Automatic',
            occupants: '7 Seaters',
            gas: 'Electric',
            price: 200,
            driverImage: require('../assets/images/woman.png'),
            driverName: "Peter Fisher",
            pickupAddress: "3891 Ranchview Dr.Richadson, California 62639"
        }
    ]

    return (
        <SafeAreaView className="bg-white h-full">
            {(isModalOpen01 || isModalOpen02 || isModalOpen03) &&
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: width,
                        height: height,
                        backgroundColor: "#00000080",
                        zIndex: 10
                    }}
                >
                </View>
            }
            <Modal01
                isModalOpen01={isModalOpen01}
                setIsModalOpen01={setIsModalOpen01}
            />
            <Modal02
                isModalOpen02={isModalOpen02}
                setIsModalOpen02={setIsModalOpen02}
            />
            <Modal03
                isModalOpen03={isModalOpen03}
                setIsModalOpen03={setIsModalOpen03}
                dataModal03={dataModal03}
            />
            <ScrollView>
                <View className="w-full flex flex-col justify-center items-center pt-10">
                    <View
                        style={{
                            width: width * 0.85,
                        }}
                        className="flex flex-row justify-start items-center p-1 mb-8"
                    >
                        <Pressable
                            onPress={() => setIsModalOpen01(!isModalOpen01)}
                            style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.9 : 1 }] }]}
                        >
                            <View
                                className="p-2 mr-3 bg-white rounded-2xl shadow-md shadow-gray-600"
                            >
                                <EvilIcons name={"location"} size={40} color={"gray"} />
                            </View>
                        </Pressable>
                        <TouchableOpacity
                            onPress={() => navigate("Screen03", {})}
                            activeOpacity={0.7}
                            className="flex flex-col justify-center items-start"
                        >
                            <Text className="text-xs text-gray-400">Your current location</Text>
                            <Text className="text-xs text-gray-900">2464 Royal Ln. Mesa, NewJersey 45463</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            width: width * 0.85,
                        }}
                        className="flex flex-row justify-between items-center mb-6"
                    >
                        <Text className="text-lg font-bold text-gray-600">Available Near You</Text>
                        <TouchableOpacity
                            onPress={() => setIsModalOpen02(!isModalOpen02)}
                            activeOpacity={0.7}
                        >
                            <Feather name={"sliders"} size={25} color={"black"} />
                        </TouchableOpacity>
                    </View>

                    {vehicles && vehicles?.map((data) => (
                        <TouchableOpacity
                            key={data.id}
                            onPress={() => {
                                setIsModalOpen03(!isModalOpen03)
                                setDataModal03(data)
                            }}
                            activeOpacity={0.7}
                            style={{
                                width: width * 0.85,
                            }}
                            className="flex flex-col justify-center items-start mb-10"
                        >
                            <Image
                                source={data.imageVehicle}
                                style={{
                                    width: "100%",
                                    height: width * 0.6,
                                    resizeMode: "contain",
                                    marginBottom: 10,
                                    borderRadius: 12
                                }}
                            />
                            <Text className="text-base font-bold text-gray-600">{data.nameVehicle}</Text>
                            <View className="flex flex-row justify-center items-start mt-2">
                                <View className="flex flex-row justify-center items-center mr-4">
                                    <MaterialCommunityIcons name={"car-shift-pattern"} size={20} color={"black"} />
                                    <Text className="text-xs text-gray-800 ml-1">{data.direction}</Text>
                                </View>
                                <View className="flex flex-row justify-center items-center mr-4">
                                    <MaterialCommunityIcons name={"car-seat"} size={20} color={"black"} />
                                    <Text className="text-xs text-gray-800 ml-1">{data.occupants}</Text>
                                </View>
                                <View className="flex flex-row justify-center items-center mr-4">
                                    <MaterialCommunityIcons name={"gas-station"} size={20} color={"black"} />
                                    <Text className="text-xs text-gray-800 ml-1">{data.gas}</Text>
                                </View>
                            </View>
                            <View className="w-full flex flex-row justify-between items-center mt-2">
                                <View className="flex flex-row justify-center items-center mr-4">
                                    <AntDesign name={"star"} size={20} color={"gold"} />
                                    <Text className="text-sm text-gray-800 font-bold ml-1">5.0 <Text className="text-xs text-gray-500">{"(1.8k + rating)"}</Text></Text>
                                </View>
                                <View className="flex flex-row justify-center items-center mr-4">
                                    <Text className="text-xs text-gray-800 ml-1">$<Text className="text-base font-bold text-gray-800">{data.price}</Text>/day</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Screen01;