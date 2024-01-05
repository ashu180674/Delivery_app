import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Feature = ({ title, img, rating, desc, add, log, lat }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("Restaurant", { img, title, rating, desc, add, log, lat })
        }} className="flex-1 bg-white rounded pb-3 mr-2">
            <Image
                className="rounded"
                source={img}
                resizeMode='contain'
                style={{
                    width: 300,
                    height: 150,
                    // aspectRatio: 1,
                }}
            />
            <Text className="ml-3 font-extrabold text-xl">{title}</Text>
            <View className="ml-2 flex-row items-center"><Ionicons name="ios-star" size={24} color="green" /><Text className="font-bold text-xl ml-2">{rating}</Text></View>
            <Text className="ml-3">{desc}</Text>
            <View className="flex-row items-center ml-2 "><EvilIcons name="location" size={24} color="#00ccbb" /><Text className="ml-1 font-bold">{add}</Text></View>
        </TouchableOpacity>
    )
}

export default Feature