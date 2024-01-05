import { useState } from "react";
import BasketContext from "./storeContextCe";


const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState(["1"])
    const [idList, SetidList] = useState([])
    const [totalPrice, SetPrice] = useState(0)
    const [marker, SetMarker] = useState([])
    const addToBasket = (k) => {
        setBasket(basket.concat(k))
        SetPrice(totalPrice + k.price)
    }
    const removeFromBasket = (k) => {
        const index = basket.findIndex((item) => item.id === k.id)
        let newBasket = [...basket]

        if (index && basket.length !== 1) {
            newBasket.splice(index, 1);
            setBasket(newBasket)
            SetPrice(totalPrice - k.price)

        }
    }

    return (
        <BasketContext.Provider value={{ basket, setBasket, addToBasket, removeFromBasket, totalPrice, marker, SetMarker }}>
            {children}
        </BasketContext.Provider>
    );
};

export default BasketProvider