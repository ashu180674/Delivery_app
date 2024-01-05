import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './categoryCard';
import Feature from './feature';
import { Feather, Ionicons } from '@expo/vector-icons';


export default function Categories() {
    const cat = [{ url: require("../assets/images/biryani.jpeg"), title: "Biryani" },
    { url: require("../assets/images/burger.jpeg"), title: "Burger" },
    { url: require("../assets/images/pizza.jpeg"), title: "Pizza" },
    { url: require("../assets/images/pav.jpeg"), title: "Pav" },
    { url: require("../assets/images/noodles.jpeg"), title: "Noodles" },
    { url: require("../assets/images/dosa.jpeg"), title: "Dosa" },
    { url: require("../assets/images/pasta.jpeg"), title: "Pasta" },
    { url: require("../assets/images/chicken.jpeg"), title: "Chicken" }
    ]
    const feat = [{ url: require("../assets/images/bulk.jpeg"), id: 1, rating: 4.8, desc: "Dine-in·Takeaway·Delivery", title: "Mayaaz Food Zone", add: "Infront of, Krishna Complex, road", lat: 78.209219, log: 26.227556 },
        { url: require("../assets/images/cashback.webp"), id: 2, rating: 4.7, desc: "Dine-in·Kerbside pickup·Delivery", title: "Dr. Lahari's Food Lab", add: "A-25, Street Number 1", lat: 78.2141, log: 26.2196 },
        { url: require("../assets/images/dotd.jpg"), id: 3, rating: 4.1, desc: "Dine-in·Drive-through", title: "Meals on wheels", add: "Morar Road, Gole Ka Mandir Rd", lat: 78.2102, log: 26.2336 },
        { url: require("../assets/images/fir.jpeg"), id: 4, rating: 3.8, desc: "Modest vegetarian eatery & sweet shop", title: "Alfanzo Restaurant", add: "Madhav Rao Scindia Marg", lat: 78.18737, log: 26.210312 }
    ]



    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* catefory start */}
            <ScrollView horizontal contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
                className="h-fit"
                showsHorizontalScrollIndicator={false}>
                {/* category card */}
                {cat.map((e) => {
                    return <CategoryCard title={e.title} image={e.url} />
                })}
            </ScrollView>

            {/* near you row start */}
            <View className="flex-row items-center mt-5 mr-5 ml-5">
                <Text className=" flex-1 font-extrabold text-xl">Offer Near you</Text>
                <Feather name="arrow-right" size={24} color="#00ccbb" />
            </View>
            <Text className="ml-5 text-xs text-gray-500">Why not support your local restaurant tonight</Text>

            <ScrollView horizontal contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
                showsHorizontalScrollIndicator={false}>

                {/* featured card */}
                {feat.map((e) => {
                    return <Feature title={e.title} img={e.url} rating={e.rating} add={e.add} desc={e.desc} lat={e.lat} log={e.log} />
                })}

            </ScrollView>
            {/* Discount start */}
            <View className="flex-row items-center mt-5 mr-5 ml-5">
                <Text className=" flex-1 font-extrabold text-xl">Tasty Discounts</Text>
                <Feather name="arrow-right" size={24} color="#00ccbb" />
            </View>
            <Text className="ml-5 text-xs text-gray-500">Everyone's been enjoying these juicy discounts</Text>

            <ScrollView horizontal contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
                showsHorizontalScrollIndicator={false}>

                {/* featured card */}
                {feat.map((e) => {
                    return <Feature title={e.title} img={e.url} rating={e.rating} add={e.add} desc={e.desc} />
                })}

            </ScrollView>
            {/* Featured start */}
            <View className="flex-row items-center mt-5 mr-5 ml-5">
                <Text className=" flex-1 font-extrabold text-xl">Fearured</Text>
                <Feather name="arrow-right" size={24} color="#00ccbb" />
            </View>
            <Text className="ml-5 text-xs text-gray-500">Paid placements from our partners</Text>

            <ScrollView horizontal contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
                showsHorizontalScrollIndicator={false}>

                {/* featured card */}
                {feat.map((e) => {
                    return <Feature title={e.title} img={e.url} rating={e.rating} add={e.add} desc={e.desc} />
                })}

            </ScrollView>
        </ScrollView>
  );
}
