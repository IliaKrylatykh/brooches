import { IProduct } from "../models"
import axios from "axios"
import {useEffect, useState} from 'react'

export function useProduct() {
    const [products, setProducts] = useState<IProduct[]>([])

    function addProduct(product: IProduct) {
        setProducts(prev => [...prev, product])
    }

    async function fetchProduct() {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=20')
        setProducts(response.data)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return{
        products, addProduct
    }
}