// modules
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';

// icons
import SearchBar from '../components/search/searchBar';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// utils
import { height, width } from '../utils/display';
import { goBack } from '../utils/RootNav';

const Screen03 = () => {

    const [searchPhrase, setSearchPhrase] = useState("");

    const cars = [
        {
            latitude: 37.74135,
            longitude: -122.4324,
            price: 200
        },
        {
            latitude: 37.73245,
            longitude: -122.4324,
            price: 200
        },
        {
            latitude: 37.72355,
            longitude: -122.4324,
            price: 200
        },
        {
            latitude: 37.71465,
            longitude: -122.4324,
            price: 200
        },
    ]


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
            pickupAddress: "3891 Ranchview Dr.Richadson, California 62639",
            distance: "1.8km"
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
            pickupAddress: "3891 Ranchview Dr.Richadson, California 62639",
            distance: "1.8km"
        }
    ]

    const customMapStyle = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ]

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>

                <View
                    style={{
                        width: width,
                    }}
                    className="mt-10 absolute top-0 left-0 z-50 flex justify-center items-center"
                >
                    <View
                        style={{
                            width: width * 0.85,
                        }}
                    >
                        <SearchBar
                            searchPhrase={searchPhrase}
                            setSearchPhrase={setSearchPhrase}
                        />
                    </View>
                </View>
                <MapView
                    style={{
                        width: width * 1,
                        height: height
                    }}
                    initialRegion={{
                        latitude: 37.74135,
                        longitude: -122.4324,
                        latitudeDelta: 0.08,
                        longitudeDelta: 0.08,
                    }}
                    customMapStyle={customMapStyle}
                >
                    {cars.map((data, index) => (
                        <Marker
                            key={index}
                            coordinate={{ latitude: data.latitude, longitude: data.longitude }}
                            title="Marcador de ejemplo"
                            description="Este es un marcador de ejemplo"
                        >
                            <View className="flex justify-center items-center w-[80px] h-[40px] bg-white rounded-full">
                                <Text className="text-base text-gray-800">${data.price}</Text>
                            </View>
                        </Marker>
                    ))}
                </MapView>
                <View
                    style={{
                        width: width,
                    }}
                    className="mt-10 absolute bottom-0 left-0 z-50 flex justify-center items-center"
                >
                    <View
                        style={{
                            width: width,
                        }}
                        className="flex flex-row justify-center items-center absolute -top-8 left-0 z-50"
                    >
                        <TouchableOpacity
                        onPress={() => goBack()}
                            activeOpacity={0.7}
                            style={{
                                width: width * 0.3,
                            }}
                            className="px-3 py-2 bg-white border border-yellow-300 rounded-xl flex flex-row justify-center items-center"
                        >
                            <Octicons name={"home"} size={20} color={"gold"} />
                            <Text className="text-base ml-2">Home</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={vehicles}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingHorizontal: 5
                        }}
                        decelerationRate={0}
                        snapToInterval={width}
                        scrollEventThrottle={20}
                        keyExtractor={(item) => (item.id.toLocaleString())}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    className="mx-3 my-5 flex flex-row justify-center items-center rounded-2xl bg-white shadow-md shadow-gray-400"
                                    style={{
                                        width: width * 0.85,
                                        height: width * 0.45,
                                    }}
                                >
                                    <Image
                                        source={item.imageVehicle}
                                        style={{
                                            width: width * 0.35,
                                            height: width * 0.35,
                                            resizeMode: "contain",
                                            borderRadius: 16,
                                        }}
                                    />
                                    <View
                                        style={{
                                            width: width * 0.35,
                                            height: width * 0.35,
                                        }}
                                        className="flex flex-col justify-center items-start ml-4"
                                    >
                                        <Text className="text-sm font-bold text-gray-600 mb-1">{item.nameVehicle}</Text>
                                        <Text className="text-xs text-gray-800 mb-1">$<Text className="text-base font-bold text-gray-800">{item.price}</Text>/day</Text>
                                        <View className="flex flex-row justify-center items-center">
                                            <AntDesign name={"star"} size={15} color={"gold"} />
                                            <Text className="text-sm text-gray-800 font-bold ml-1 mb-1">5.0 <Text className="text-xs text-gray-500">{"(1.8k + rating)"}</Text></Text>
                                        </View>
                                        <Text className="text-xs text-gray-800 mb-1">{item.distance}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Screen03;