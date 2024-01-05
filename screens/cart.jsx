import React, { useLayoutEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import BasketContext from '../context/storeContextCe';

export default function Cart({ navigation }) {
    const { basket, totalPrice } = useContext(BasketContext)
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()} className="absolute right-5 top-3 z-50">
                <Entypo name="circle-with-cross" size={34} color="black" />
            </TouchableOpacity>
            <View className="bg-white p-3  items-center">
                <Text className="text-xl font-extrabold">Basket</Text>
                <Text className='text-gray-400'>Nando's</Text>
            </View>
            <View className='p-2 my-5 bg-white flex-row items-center'>
                <View className='flex-row items-center flex-1'>
                    <Image
                        className="rounded mr-3 mb-1"
                        source={require("../assets/icon.png")}
                        style={{ height: 40, width: 40 }}
                    />
                    <Text className='font-bold'>Delivery in 50-70 min</Text>
                </View>
                <Text style={{ color: "#00ccbb" }}>Change</Text>
            </View>
            <ScrollView className='mb-40' style={{ height: 430 }}>
                {basket.map((item, index) => {
                    if (index !== 0) {
                        return (
                            <View className='flex-row items-center p-4 bg-white'>
                                <View className='flex-row items-center flex-1'>
                                    <Text className='font-bold'>1 x </Text>
                                    <Image source={require("../assets/images/chicken.jpeg")}
                                        style={{ height: 40, width: 40 }}
                                        className='rounded-full mx-2'
                                    />
                                    <Text>{item.Dname}</Text>
                                </View>
                                <Text>{item.price}</Text>
                            </View>)
                    }
                })}
            </ScrollView>
            <View className='absolute z-50 top-3/4 mt-10 h-screen bg-white w-screen p-2'>
                <View className=' items-center flex-row p-x py-2'>
                    <Text className=' flex-1 text-gray-400'>Subtotal</Text>
                    <View className="items-center flex-row">
                        <FontAwesome name="rupee" opacity={0.4} size={14} color="black" />
                        <Text className='text-gray-400'>{totalPrice}</Text>
                    </View>
                </View>
                <View className=' items-center flex-row p-x py-2'>
                    <Text className=' flex-1 text-gray-400'>Delivery Fees</Text>
                    <View className="items-center flex-row">
                        <FontAwesome name="rupee" opacity={0.4} size={14} color="black" />
                        <Text className='text-gray-400'>40</Text>
                    </View>
                </View>
                <View className=' items-center flex-row p-x py-2'>
                    <Text className=' flex-1 font-bold'>Order Total</Text>
                    <View className="items-center flex-row">
                        <FontAwesome name="rupee" size={14} color="black" />
                        <Text>{totalPrice + 40}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Preparing")} className='item-center justify-center p-3 rounded-2xl' style={{ backgroundColor: "#00ccbb" }}>
                    <Text className='text-xl text-white text-center font-bold'>Place Order</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
