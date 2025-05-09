const {
  fetchHotels,
  addHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotelController");

const router = require("express").Router();

router.route("/hotels").get(fetchHotels).post(addHotel);
router.route("/hotels/:id").patch(updateHotel).delete(deleteHotel);

module.exports = router;
