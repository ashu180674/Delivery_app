import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';

export default function Preparing({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 3000);

    }, [])

    return (
        <View style={{ backgroundColor: "#00ccdd" }} className="items-center justify-center h-screen">
            <StatusBar backgroundColor={"#00ccdd"} />
            <Animatable.Image source={require("../assets/icon.png")} style={{ height: 160, width: 160 }} animation="slideInDown" iterationCount={1} />
            <Animatable.Text className=' text-lg mb-10 text-white' animation="zoomInUp">Waiting for Restaurant to accept your order</Animatable.Text>
            <Animatable.Image source={require("../assets/Spinner.gif")} style={{ height: 60, width: 60 }} animation="slideInDown" iterationCount={1} />
        </View>
    );
}
