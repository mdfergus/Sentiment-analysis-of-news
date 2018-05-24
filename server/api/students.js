const router = require('express').Router();
const { Student } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await Student.destroy({
      where: {
        id
      }
    });
    console.log('delete');
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
