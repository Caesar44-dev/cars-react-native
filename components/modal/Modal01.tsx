// modules
import React from 'react'
import { Modal, Text, View, Image, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

// utils
import { height, width } from '../../utils/display'

const Modal01 = ({ isModalOpen01, setIsModalOpen01 }: any) => {
    return (
        <Modal
            visible={isModalOpen01}
            transparent={true}
            animationType="slide"
        >
            <View
                className="flex-1 flex-col justify-end items-center"
            >
                <View
                    style={{
                        width: width,
                        height: height * 0.45
                    }}
                    className="flex justify-center items-center bg-white rounded-t-3xl"
                >
                    <TouchableOpacity
                        onPress={() => setIsModalOpen01(!isModalOpen01)}
                        activeOpacity={0.5}
                        className="p-2 bg-gray-100 rounded-full absolute right-5 top-5"
                    >
                        <Feather name={"x"} size={20} color={"black"} />
                    </TouchableOpacity>
                    <Text className="text-sm font-bold text-gray-800 mb-2">Enable Location</Text>
                    <View
                        style={{
                            width: width * 0.45,
                            height: 2
                        }}
                        className="bg-yellow-300 relative mb-4"
                    >
                        <View className="absolute -top-[2px] left-0 w-[6px] h-[6px] bg-yellow-300 rotate-45"></View>
                        <View className="absolute -top-[2px] right-0 w-[6px] h-[6px] bg-yellow-300 rotate-45"></View>
                    </View>
                    <Image
                        style={{
                            width: "100%",
                            height: height * 0.17,
                            resizeMode: "contain",
                            marginBottom: 10,
                            borderRadius: 12
                        }}
                        source={require('../../assets/images/map.png')}
                    />
                    <Text style={{ width: width * 0.85 }} className={"text-xs text-gray-500 text-center my-4"}>
                        By allowing geolocation, you will be able to find and track rides
                        easily and share rides with friends
                    </Text>
                    <TouchableOpacity
                        // onPress={}
                        activeOpacity={0.7}
                        style={{
                            width: width * 0.85
                        }}
                        className={"bg-yellow-300 py-3 px-6 rounded-lg shadow-md flex justify-center items-center"}
                    >
                        <Text className={"text-lg font-semibold text-gray-600"}>
                            Allow
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default Modal01