import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = (API) => {
    const [products, setProducts] = useState({});

    useEffect( async () => {
        const response = await axios.get(API);
        setProducts(response.data)
    }, [API])

    return products;
};

export default useProducts;