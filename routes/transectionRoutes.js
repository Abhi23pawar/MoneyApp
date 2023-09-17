const express = require("express");
const {
  addTransection,
  editTransection,
  deleteTransection,
  getAllTransection,
} = require("../controllers/transectionCtrl");

const router = express.Router();

router.post("/add-transection", addTransection);
router.post("/edit-transection", editTransection);
router.post("/delete-transection", deleteTransection);
router.post("/get-transection", getAllTransection);

module.exports = router;
