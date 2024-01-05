
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useContext } from 'react';
import { Ionicons, EvilIcons, AntDesign, Feather } from '@expo/vector-icons';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import BasketContext from '../context/storeContextCe';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Login = () => {
    const navigator = useNavigation()
    useLayoutEffect(() => {
        navigator.setOptions({
            headerShown: false
        })
    }, [])
    const { basket, setBasket } = useContext(BasketContext)
    return (
        <ImageBackground
            source={{
                uri:
                    'https://wallpapercave.com/wp/wp2852575.jpg',
            }}
            resizeMode="stretch"
            style={styles.img}>
            <TouchableOpacity onPress={() => {
                navigator.navigate("Home")
            }} style={{ elevation: 20 }}
                className="  p-1 bg-white rounded-full items-center text-center absolute top-9 left-3 "><Ionicons name="arrow-back" size={30} color="#00ccbb" />
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default Login;

const styles = StyleSheet.create({
    img: {
        height: screenHeight,
        width: screenWidth,
        alignItems: 'center',
    },
});