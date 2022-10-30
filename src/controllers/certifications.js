const {Certification} = require('../../models');
const getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.findAll();
    res.json(certifications);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error al obtener las certificaciones",
      errorData: e,
    });
  }
};

const createCertification = async (req, res) => {
  const { name, description, image, company } = req.body;
  try {
    const certification = await Certification.create({
      name,
      description,
      image,
      company,
    });
    res.json(certification);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error al crear la certificación",
      errorData: e,
    });
  }
};

const updateCertification = async (req, res) => {
  const { id } = req.params;
  const { name, description, image, company } = req.body;
  try {
    const certification = await Certification.update(
      {
        name,
        description,
        image,
        company,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json(certification);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error al actualizar la certificación",
      errorData: e,
    });
  }
};

const deleteCertification = async (req, res) => {
  const { id } = req.params;
  try {
    const certification = await Certification.destroy({
      where: {
        id,
      },
    });
    res.json(certification);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "Error al eliminar la certificación",
      errorData: e,
    });
  }
};

module.exports = {
  getCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
};
