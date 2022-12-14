const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// ****** Code for getting all Tags STARTS****
router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ENDS

// ****** Code for creating a new Tag STARTS****
router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// ENDS



router.put("/:id", async (req, res) => {
  try {
    const updatedTag = await Tag.update(
      { tag_name: req.body.tag_name },
      { where: { id: req.params.id } }
    );
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.delete("/:id", (req, res) => {
  // delete one tag `id` value

  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTags) => res.json(deletedTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

// ENDS

module.exports = router;
