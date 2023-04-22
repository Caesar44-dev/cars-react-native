// modules
import React from 'react'
import { Modal, Text, View, Image, TouchableOpacity } from 'react-native'

// icons
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// utils
import { navigate } from '../../utils/RootNav';
import { height, width } from '../../utils/display'

const Modal03 = ({ isModalOpen03, setIsModalOpen03, dataModal03 }: any) => {
    return (
        <Modal
            visible={isModalOpen03}
            transparent={true}
            animationType="slide"
        >
            <View
                className="flex-1 flex-col justify-end items-center"
            >
                <View
                    style={{
                        width: width,
                        height: height * 0.85
                    }}
                    className="flex justify-center items-center bg-white rounded-t-3xl"
                >
                    <TouchableOpacity
                        onPress={() => setIsModalOpen03(!isModalOpen03)}
                        activeOpacity={0.5}
                        className="p-2 bg-gray-100 rounded-full absolute right-5 top-3"
                    >
                        <Feather name={"x"} size={20} color={"black"} />
                    </TouchableOpacity>
                    <View
                        style={{
                            width: width * 0.85,
                        }}
                        className="flex flex-col justify-center items-start mt-2 mb-5"
                    >
                        <Image
                            source={dataModal03.imageVehicle}
                            style={{
                                width: "100%",
                                height: width * 0.6,
                                resizeMode: "contain",
                                marginBottom: 10,
                                borderRadius: 12
                            }}
                        />
                        <Text className="text-base font-bold text-gray-600">{dataModal03.nameVehicle}</Text>
                        <View className="flex flex-row justify-center items-start mt-2">
                            <View className="flex flex-row justify-center items-center mr-4">
                                <MaterialCommunityIcons name={"car-shift-pattern"} size={20} color={"black"} />
                                <Text className="text-xs text-gray-800 ml-1">{dataModal03.direction}</Text>
                            </View>
                            <View className="flex flex-row justify-center items-center mr-4">
                                <MaterialCommunityIcons name={"car-seat"} size={20} color={"black"} />
                                <Text className="text-xs text-gray-800 ml-1">{dataModal03.occupants}</Text>
                            </View>
                            <View className="flex flex-row justify-center items-center mr-4">
                                <MaterialCommunityIcons name={"gas-station"} size={20} color={"black"} />
                                <Text className="text-xs text-gray-800 ml-1">{dataModal03.gas}</Text>
                            </View>
                        </View>
                        <View className="w-full flex flex-row justify-between items-center mt-2">
                            <View className="flex flex-row justify-center items-center mr-4">
                                <AntDesign name={"star"} size={20} color={"gold"} />
                                <Text className="text-sm text-gray-800 font-bold ml-1">5.0 <Text className="text-xs text-gray-500">{"(1.8k + rating)"}</Text></Text>
                            </View>
                        </View>

                        <View
                            style={{
                                width: width * 0.85,
                                height: 1
                            }}
                            className="bg-gray-300 relative my-3"
                        >
                        </View>
                        <View
                            style={{
                                width: width * 0.85
                            }}
                            className="flex flex-row justify-center items-center mt-2"
                        >
                            <Image
                                source={dataModal03.driverImage}
                                style={{
                                    width: width * 0.1833,
                                    height: width * 0.18,
                                    resizeMode: "contain",
                                    marginBottom: 10,
                                    borderRadius: 60,
                                }}
                            />
                            <View
                                style={{
                                    width: width * 0.3833
                                }}
                                className="flex flex-col justify-center items-start"
                            >
                                <Text className="text-sm text-gray-600 font-bold ml-4">{dataModal03.driverName}</Text>
                                <Text className="text-xs text-gray-300 ml-4">Renter</Text>
                            </View>
                            <View
                                style={{
                                    width: width * 0.2833
                                }}
                                className="flex flex-row justify-center items-start"
                            >
                                <TouchableOpacity
                                    // onPress={}
                                    activeOpacity={0.5}
                                    className={"mx-3 flex justify-center items-center"}
                                >
                                    <AntDesign name={"phone"} size={25} color={"black"} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    // onPress={}
                                    activeOpacity={0.5}
                                    className={"mx-3 flex justify-center items-center"}
                                >
                                    <MaterialCommunityIcons name={"message-minus-outline"} size={25} color={"black"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View
                            style={{
                                width: width * 0.85,
                            }}
                            className="flex flex-col justify-center items-start mt-2"
                        >
                            <Text className="text-xs text-gray-300">Pickup Address: </Text>
                            <Text className="text-sm text-gray-600 font-bold">{dataModal03.pickupAddress}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: width * 0.85,
                        }}
                        className="flex flex-row justify-between items-start mt-2"
                    >
                        <View className="flex flex-col justify-center items-start">
                            <Text className="text-sm text-gray-300 mb-2">Rent Price: </Text>
                            <Text className="text-lg text-gray-600 font-bold">
                                ${dataModal03.price}
                                <Text className="text-sm text-gray-300 ml-4">/day</Text>
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                setIsModalOpen03(!isModalOpen03)
                                navigate("Screen02", { dataModal03 })
                            }}
                            activeOpacity={0.8}
                            style={{
                                width: width * 0.4
                            }}
                            className={"bg-yellow-300 py-3 px-6 rounded-lg shadow-md flex justify-center items-center"}
                        >
                            <Text className={"text-lg font-semibold text-gray-600"}>
                                Book Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Modal03;