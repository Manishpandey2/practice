const {
  fetchClient,
  addClient,
  updateClient,
  deleteClient,
  fetchSingleClient,
} = require("../controllers/clientController");

const router = require("express").Router();

router.route("/").get(fetchClient).post(addClient);
router
  .route("/:id")
  .patch(updateClient)
  .delete(deleteClient)
  .get(fetchSingleClient);

module.exports = router;
