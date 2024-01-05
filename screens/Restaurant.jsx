import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'
import { Ionicons, EvilIcons, AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import DishCard from './dishCard';
import BasketContext from '../context/storeContextCe';

const Restaurant = () => {

    const { basket, setBasket, removeFromBasket, addToBasket, totalPrice, SetMarker, marker } = useContext(BasketContext)

    const navigator = useNavigation()

    useLayoutEffect(() => {
        navigator.setOptions(
            {
                headerShown: false
            }
        )
    }, [])
    const { params: { add, img, title, rating, desc, lat, log } } = useRoute()
    return (
        <>
            <TouchableOpacity onPress={() => { SetMarker({ lat: lat, log: log, title: title, desc: desc }); navigator.navigate("Cart") }} activeOpacity={0.95} className="absolute bottom-5 w-full z-50 items-center">
                <View style={{ backgroundColor: "#00ccbb", elevation: 15 }} className="w-4/5 flex-row justify-center text-center items-center h-fit p-4 rounded-2xl">
                    <Text className="text-white text-xl font-bold text-center">{basket.length - 1}</Text>
                    <Text className="text-white text-xl font-bold text-center flex-1">View Basket</Text>
                    <FontAwesome name="rupee" size={18} color="white" />
                    <Text className="text-white text-xl font-bold ml-1 text-center">{totalPrice}</Text>
                </View>
            </TouchableOpacity>

            <ScrollView className=" " >
                <View className="bg-white h-fit relative">
                <Image
                    resizeMode='cover'
                    style={{ height: 200, width: "100%" }}
                    source={img}
                />
            </View>
            <TouchableOpacity onPress={() => {
                navigator.navigate("Home")
                }} style={{ elevation: 20 }}
                    className="  p-1 bg-white rounded-full items-center text-center absolute top-9 left-3 "><Ionicons name="arrow-back" size={30} color="#00ccbb" /></TouchableOpacity>
            <View className=" text-center  bg-white">
                <Text className="text-2xl text-center font-bold ">{title}</Text>
                <View className="flex-row p-3">
                    <View className=" flex-row items-center"><Ionicons opacity={0.5} name="ios-star" size={24} color="green" /><Text className="font-bold text-center text-xl ml-2">{rating}</Text><Text className="text-xs"> offers</Text></View>
                    <View className="flex-row items-center ml-2 "><EvilIcons name="location" size={24} color="#00ccbb" /><Text>{add}</Text></View>
                </View>
                <Text className="font-bold mt-1 px-3 pb-1">{desc}</Text>
                    <View style={{ height: 1 }} className=" w-screen bg-gray-400"></View>
                <TouchableOpacity className="flex-row items-center p-2">
                    <View className="flex-row space-x-2 items-center flex-1"><AntDesign name="questioncircleo" size={20} opacity={0.5} color="black" /><Text className=" text-lg font-bold">Have a food allergy?</Text></View>
                    <Feather name="arrow-right-circle" size={24} color="#00ccbb" />
                </TouchableOpacity>
                    <View style={{ height: 1 }} className=" w-screen bg-gray-400"></View>
            </View>
            <View>
                <Text className="text-xl font-extrabold ml-6 py-2">Menu</Text>
            </View>
            <ScrollView
                    showsVerticalScrollIndicator={false}
                    className="bg-white w-screen h-fit p-3 pb-20">
                    <DishCard Dname={"rooti"} id={1} price={10} img={require("../assets/images/burger.jpeg")} link="../assets/images/burger.jpeg" />
                    <DishCard Dname={"dal"} id={2} price={100} img={require("../assets/images/burger.jpeg")} link="../assets/images/burger.jpeg" />
                    <DishCard Dname={"burger"} id={3} price={50} img={require("../assets/images/burger.jpeg")} link="../assets/images/burger.jpeg" />
                    <DishCard Dname={"biryani"} id={4} price={100} img={require("../assets/images/burger.jpeg")} link="../assets/images/burger.jpeg" />
                    <DishCard Dname={"rooti dal"} id={5} price={110} img={require("../assets/images/burger.jpeg")} link="../assets/images/burger.jpeg" />
                    <DishCard Dname={"maggie"} id={6} price={10} img={require("../assets/images/burger.jpeg")} link="../assets/images/burger.jpeg" />
            </ScrollView>
        </ScrollView>
        </>
    )
}

export default Restaurant