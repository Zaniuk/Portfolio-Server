const express = require("express");
const router = express.Router();
const {verifyToken } = require("../middlewares/auth");
const {
  getCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
  getCertification,
} = require("../controllers/certifications");

router.get("/", getCertifications);
router.get("/:id", getCertification);
router.post("/", verifyToken ,createCertification);
router.put("/:id", verifyToken ,updateCertification);
router.delete("/:id", verifyToken ,deleteCertification);

module.exports = router;
