import { View, Text, Image, SafeAreaView, TextInput, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons';
import Categories from './categories';

const HomeScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView  >
            <StatusBar backgroundColor={"white"} barStyle="dark-content" />
            <View className="w-screen bg-white h-fit pl-3">
            <View className=" gap-2 items-center flex-row mr-7">
            <Image
                className="rounded-full"
                        source={require("../assets/icon.png")}
                style={{height:50,width:50}} 
            />
            <View className="flex-1">
                <Text className="font-bold text-gray-600 text-xs">Deliver Now</Text>
                <Text className="font-bold text-xl">Current Location
                <Ionicons name="md-chevron-down-sharp" size={24} color="#00ccbb" />
                </Text>
            </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <FontAwesome5 name="user" size={24} color="#00ccbb" />
                    </TouchableOpacity>
            </View>
            {/* search  */}
            <View className=" flex-row pr-5 items-center mb-2 mt-1">
                <View className=" bg-gray-300 flex-row py-1 flex-1 rounded px-3 space-x-2">
                    <FontAwesome name="search" size={24} color="#00ccbb" />
                    <TextInput className=" rounded  px-5" placeholder='Restaurants and Cuisines' style={{height:30,width:"80%"}} keyboardType='default'></TextInput>
                </View>
                <Entypo name="flow-parallel" size={24} color="#00ccbb" />
            </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 150,

                }}
                className="bg-gray-200 h-screen w-screen">
                {/* categories */}
                <Categories/>
                {/* Featured rows */}
            </ScrollView>
        </SafeAreaView>

    )
}

export default HomeScreen
