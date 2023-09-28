const { Tag } = require('../models');

const tagData = [
  
  {
    id:1,
    tag_name: 'long-sleveed ',
  },
  {
    id:2,
    tag_name: 'vans',
  },
  {
    id:3,
    tag_name: 'red',
  },
  {
    id:4,
    tag_name: 'green',
  },

];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
