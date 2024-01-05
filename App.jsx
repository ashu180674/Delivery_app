import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Restaurant from './screens/Restaurant';
import Login from './screens/Login';
import BasketProvider from './context/storeContext';
import Cart from './screens/cart';
import Preparing from './screens/preparing';
import Delivery from './screens/Delivery';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // navigation using react navigator and navigator stack
    // css using nativewind(tailwind)
    // fontawesom = just hit to "https://icons.expo.fyi/"
    // carousel https://www.educative.io/answers/how-to-integrate-carousel-in-react-native-with-pagination
    // api from sanity.io/sonny
    // useContext use kr sakte hai
    // android wallpaper ="https://wallpapercave.com/background-android" or "https://www.pxfuel.com/en/query?q=background+android+apps"
    // for animation   https://www.npmjs.com/package/react-native-animatable


    <BasketProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cart" component={Cart}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen name="Preparing" component={Preparing} options={{ headerShown: false, presentation: "fullScreenModal" }} />
          <Stack.Screen name="Delivery" component={Delivery} options={{ headerShown: false, presentation: "fullScreenModal" }} />
      </Stack.Navigator>
    </NavigationContainer>
    </BasketProvider>

  );
}