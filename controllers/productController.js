import Product from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await 
        Product.find({});
        res.json(products);      
    } catch(error) {
        res.status(500).json({ message:"Failed to fetch products", error})
    }
};