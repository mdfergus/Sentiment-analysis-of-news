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

router.put('/', async (req, res, next) => {
  try {
    const info = req.body;
    console.log(info);
    await Student.update(
      {
        firstName: info.firstName,
        lastName: info.lastName,
        email: info.email,
        imageUrl: info.imageUrl,
        gpa: info.gpa
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
    await Student.destroy({
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
