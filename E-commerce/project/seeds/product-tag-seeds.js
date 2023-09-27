const { ProductTag } = require('../models');

const productTagData = [
  {
    id:1,
    product_id: 1,
    tag_id: 3,
  },
  {
    id:2,
    product_id: 2,
    tag_id: 4,
  },
  {
    id:3,
    product_id: 3,
    tag_id: 1,
  },
  {
    id:4,
    product_id: 4,
    tag_id: 1,
  },
 
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
