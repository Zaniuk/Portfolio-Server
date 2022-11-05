// const {Projects, sequelize} = require('../../models');
const { Projects } = require("../../models");
const { optimize } = require("../helpers/imagesHelper");
const getProjects = async (req, res) => {
  const projects = await Projects.findAll();
  res.json(projects);
};
const createProject = async (req, res) => {
  const { title, description, article, status, tags, image, github } = req.body;
  try {
    if (image) {
      const tagsString = tags.join("|");
      const project = await Projects.create({
        title,
        description,
        article,
        status,
        tags: tagsString,
        image: await optimize(image),
        github,
      });
      res.json(project);
    } else {
      res.json({ message: "Image is required" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error al crear el proyecto",
      errorData: e,
    });
  }
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, article, status,tags, image, github } = req.body;

  try {
    const project = await Projects.findOne({
      where: {
        id,
        },
      });
      if (project) {
        const updated = await Projects.update(
          {
            title,
            description,
            article,
            status,
            tags: tags.join("|"),
            image,
            github,
          },
          {
            where: {
              id,
            },
          }
        );
        res.json({
          message: "Project updated successfully",
          data: updated,
        });
      } else {
        res.status(404).json({
          message: "Project not found",
        });
      }
    } catch (e) {
      res.status(500).json({
        message: "Something goes wrong",
        errorData: e,
      });
    }
};
const getProjectDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Projects.findOne({
      where: {
        id,
      },
    });
    res.json(project);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error al obtener el proyecto",
      errorData: e,
    });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Projects.destroy({
      where: {
        id,
      },
    });
    res.json(project);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error al eliminar el proyecto",
      errorData: e,
    });
  }
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  getProjectDetail,
  deleteProject,
};
