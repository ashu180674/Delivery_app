import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import BasketContext from '../context/storeContextCe';

export default function DishCard({ Dname, id, price, img, link }) {
    const [value, setValue] = useState(0)
    const { basket, setBasket, removeFromBasket, addToBasket } = useContext(BasketContext)

    return (
        <View className="mb-1">
            <View className="flex-row items-center justify-between">
                <View style={{ width: 240 }}>
                    <Text className="font-bold text-xl">{Dname}</Text>
                    <Text className="text-gray-500">dish description and also how it taste, where it is available. App made by Arjun</Text>
                </View>
                <Image
                    className="rounded "
                    source={img}
                    style={{ height: 70, width: 70 }}
                />
            </View>
            <View className="flex-row items-center mt-2">
                <FontAwesome name="rupee" size={15} opacity={0.6} color="black" />
                <Text className="text-gray-500 pb-1 ml-1">{price}</Text>
            </View>
            <View className="flex-row ml-3 items-center mt-3 space-x-4">
                <TouchableOpacity onPress={() => { removeFromBasket({ Dname, id, price, img, link }); }}><MaterialCommunityIcons name="minus-circle" size={36} color="black" /></TouchableOpacity>
                <Text className='text-xl font-bold'>{basket.filter((item) => item.id === id).length}</Text>
                <TouchableOpacity onPress={() => { addToBasket({ Dname, id, price, img, link }) }}><FontAwesome5 name="plus-circle" size={30} color="black" /></TouchableOpacity>
            </View>
            <View style={{ height: 1 }} className="w-screen bg-gray-300 my-2"></View>
        </View>
    );
}
