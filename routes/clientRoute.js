const {
  fetchClient,
  addClient,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

const router = require("express").Router();

router.route("/").get(fetchClient).post(addClient);
router.route("/:id").patch(updateClient).delete(deleteClient);

module.exports = router;
