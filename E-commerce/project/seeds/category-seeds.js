const { Category } = require('../models');

const categoryData = [
  {
    id:1,
    category_name: 'clothing',
  },
  {
    id:2,
    category_name: 'Electronics',
  },
  {
    id:3,
    category_name: 'Footwear',
  },
  {
    id:4,
    category_name: 'Toys',
  },
  
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
