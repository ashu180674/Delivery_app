import React, { useContext } from 'react';
import * as Progress from 'react-native-progress';
import { Entypo } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import BasketContext from '../context/storeContextCe';

export default function Delivery({ navigation }) {
    const { marker } = useContext(BasketContext)
    console.log(marker.lat, marker.log);
    return (
        <SafeAreaView>
            <View className='items-center justify-center z-20'>
                <View style={{ elevation: 10, width: "90%" }} className="absolute top-16  p-4 rounded bg-white ">
                    <Text className='font-bold text-gray-400 absolute left-5 top-5'>Estimated Arrival </Text>
                    <View className='flex-row items-center'>
                        <Text className='text-3xl mt-5 font-extrabold  flex-1'>45-55 Minites</Text>
                        <Image className='right-0 pb-9' source={require("../assets/icon.png")} style={{ height: 80, width: 80 }} />
                    </View>
                    {/* <Image className=" w-32 h-3" source={require("../assets/loading.gif")} /> */}
                    <Progress.Bar progress={0.3} color='#00ccbb' indeterminate={true} width={200} />
                    <Text className='text-gray-400 font-bold mt-1'>Your order at {marker.title} is being prepared</Text>
                </View>
            </View>
            <View className='flex-row p-5 h-44' style={{ backgroundColor: "#00ccdd" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} className="flex-1 z-50"><Entypo name="cross" size={30} color="white" /></TouchableOpacity>
                <Text className='font-bold text-white'>Order Help</Text>
            </View>
            <MapView
                initialRegion={{
                    latitude: marker.log,
                    longitude: marker.lat,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                className='-at-10 -mt-10 z-0 h-screen w-screen'
                mapType='mutedStandard'
            >
                <Marker
                    coordinate={{
                        latitude: marker.log,
                        longitude: marker.lat,
                    }}
                    title={marker.title}
                    description={marker.desc}
                    identifier='origin'
                    pinColor='#00ccbb'
                />
            </MapView>
            <View className='bg-white absolute rounded justify-between z-50 w-screen h-24 p-4 flex-row items-center' style={{ top: "75%" }}>
                <Image className='rounded-full' source={require("../assets/icon.png")} style={{ height: 60, width: 60 }} />
                <View className="mx-2 flex-1">
                    <Text className='text-lg  font-bold'>Arjun Kumar Soni</Text>
                    <Text className='text-gray-400'>Your Rider</Text>
                </View>
                <Text className='text-lg font-bold' style={{ color: "#00ccbb" }}>Call Now</Text>

            </View>
        </SafeAreaView >
    );
}
