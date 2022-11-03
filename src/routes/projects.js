// create route

const express = require('express');
const { getProjects, createProject, updateProject, deleteProject, getProjectDetail } = require('../controllers/projects');
const { verifyToken } = require('../middlewares/auth');
const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProjectDetail);
router.post('/', verifyToken , createProject);
router.put('/:id', verifyToken , updateProject);
router.delete('/:id', verifyToken , deleteProject);
module.exports = router;