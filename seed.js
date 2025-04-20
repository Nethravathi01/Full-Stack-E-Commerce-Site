import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(async () => {
  await Product.deleteMany(); // Clear old data

  await Product.insertMany([
    {
      name: "T-Shirt",
      image: "images/tshirt.jpg",
      description: "Cotton T-shirt",
      price: 499,
      category: "Clothing",
    },
    {
      name: "Sneakers",
      image: "images/sneakers.jpg",
      description: "Comfortable shoes",
      price: 1599,
      category: "Footwear",
    },
  ]);

  console.log("Sample products inserted!");
  process.exit();
});