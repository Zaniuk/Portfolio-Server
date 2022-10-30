// create route

const express = require('express');
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/projects');
const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
module.exports = router;