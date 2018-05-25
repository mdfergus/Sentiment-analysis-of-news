const router = require('express').Router();
const { Campus } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (error) {
    next(error);
  }
});

router.get('/show/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.id);
    res.json(campus);
  } catch (error) {
    next(error);
  }
});

router.get('/new', (req, res, next) => {
  //campus new form
  try {
    res.send();
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log('new form submitted');
    const info = req.body;
    const campus = await Campus.create({
      name: info.name,
      address: info.address,
      description: info.description,
      imageUrl: info.imageUrl
    });
    res.json(campus);
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res, next) => {
  // campus edit
  try {
    const info = req.body;
    await Campus.update(
      {
        name: info.name,
        address: info.address,
        description: info.description,
        imageUrl: info.imageUrl
      },
      { where: { id: info.id } }
    );
    res.send(info.id);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await Campus.destroy({
      where: {
        id
      }
    });
    res.send(id);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
