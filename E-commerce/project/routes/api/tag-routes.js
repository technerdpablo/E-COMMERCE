const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

//crud routes

router.get('/', async (req, res) => {
  // fetch all tags
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    if (!tagData) {
      res.status(404).json({ message: "No Tag Found" })
      return;
    }
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // etch tag by id
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!tagData) {
      res.status(404).json({ message: "No Tag Found" })
      return;
    }
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name: req.body.category_name
    });
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag by id
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({ message: "No Tag Found" });
    }
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete  tag by id
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag Found " });
    }
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
