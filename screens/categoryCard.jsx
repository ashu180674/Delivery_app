import { Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({ image, title }) => {
    return (
        <TouchableOpacity className="flex-1 mr-2 items-center">
            <Image
                source={image}
                className=" rounded-xl xl"
                style={{ height: 80, width: 80 }}
            />
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard