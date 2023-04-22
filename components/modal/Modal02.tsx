// modules
import React, { useCallback, useState } from 'react'
import { Modal, Text, View, TouchableOpacity } from 'react-native'

// icons
import Feather from 'react-native-vector-icons/Feather'
import { Slider } from '@miblanchard/react-native-slider';

// utils
import { height, width } from '../../utils/display'

const Modal02 = ({ isModalOpen02, setIsModalOpen02 }: any) => {
    const [distance, setDistance] = useState(0)
    const [price, setPrice] = useState(0)

    const handleValueChange01 = useCallback((value: any) => {
        setDistance(value);
    }, []);

    const handleValueChange02 = useCallback((value: any) => {
        setPrice(value);
    }, []);

    return (
        <Modal
            visible={isModalOpen02}
            transparent={true}
            animationType="slide"
        >
            <View
                className="flex-1 flex-col justify-end items-center"
            >
                <View
                    style={{
                        width: width,
                        height: height * 0.6
                    }}
                    className="flex justify-center items-center bg-white rounded-t-3xl"
                >
                    <TouchableOpacity
                        onPress={() => setIsModalOpen02(!isModalOpen02)}
                        activeOpacity={0.5}
                        className="p-2 bg-gray-100 rounded-full absolute right-5 top-5"
                    >
                        <Feather name={"x"} size={20} color={"black"} />
                    </TouchableOpacity>
                    <Text className="text-sm font-bold text-gray-800 mb-2">Filter</Text>
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
                    <View
                        style={{
                            width: width * 0.85,
                        }}
                    >
                        <Text className="text-xs text-gray-500 mb-2">
                            Sort By
                        </Text>

                        <Text className="text-base text-gray-800 mb-3">
                            Relevance
                        </Text>
                    </View>
                    <View
                        style={{
                            width: width * 0.85,
                            height: 1
                        }}
                        className="bg-gray-300 relative my-2"
                    >
                    </View>
                    <View
                        style={{ width: width * 0.85 }}
                        className={"text-xs text-gray-500 text-center my-4"}
                    >
                        <Text className="text-xs text-gray-500 mb-2">
                            Distance
                        </Text>
                        <Slider

                            thumbTintColor="#ededed"
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="#fde047"
                            maximumTrackTintColor="#ededed"
                            step={1}
                            value={distance}
                            onValueChange={handleValueChange01}
                        />
                        <View
                            style={{
                                width: width * 0.85,
                            }}
                            className="flex flex-row justify-between items-center"
                        >
                            <Text className="text-xs text-gray-500 mb-2">
                                0.1 km
                            </Text>
                            <Text className="text-xs text-gray-500 mb-2">
                                10 km
                            </Text>
                        </View>
                        <View
                            style={{
                                width: width * 0.85,
                                height: 1
                            }}
                            className="bg-gray-300 relative my-4"
                        >
                        </View>
                        <Text className="text-xs text-gray-500 mb-2">
                            Price Range
                        </Text>
                        <Slider

                            thumbTintColor="#ededed"
                            minimumValue={10}
                            maximumValue={500}
                            minimumTrackTintColor="#fde047"
                            maximumTrackTintColor="#ededed"
                            step={1}
                            value={price}
                            onValueChange={handleValueChange02}
                        />
                        <View
                            style={{
                                width: width * 0.85,
                            }}
                            className="flex flex-row justify-between items-center"
                        >
                            <Text className="text-xs text-gray-500 mb-2">
                                $10.00
                            </Text>
                            <Text className="text-xs text-gray-500 mb-2">
                                $500.00
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        // onPress={}
                        activeOpacity={0.8}
                        style={{
                            width: width * 0.85
                        }}
                        className={"bg-yellow-300 py-3 px-6 rounded-lg shadow-md flex justify-center items-center"}
                    >
                        <Text className={"text-lg font-semibold text-gray-600"}>
                            Apply
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default Modal02