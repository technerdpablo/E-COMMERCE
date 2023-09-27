const { Product } = require('../models');

const productData = [
  {
    id:1,
    product_name: 'Men-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    id:2,
    product_name: 'Unisex Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 3,
  },
  {
    id:3,
    product_name: 'Speaking-turtle toy',
    price: 2.99,
    stock: 12,
    category_id: 4,
  },

  {
    id:4,
    product_name: 'Cargo pants',
    price: 29.99,
    stock: 22,
    category_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
