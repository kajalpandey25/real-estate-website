// import express from "express";
// import {
//   bookVisit,
//   cancelBooking,
//   createUser,
//   getAllBookings,
//   getAllFav,
//   toFav,
// } from "../controllers/userCntrl.js";
// import jwtCheck from "../config/auth0Config.js";
// const router = express.Router();

// router.post("/register", jwtCheck, createUser);
// router.post("/bookVisit/:id", jwtCheck, bookVisit);
// router.post("/allBookings", getAllBookings);
// router.post("/removeBooking/:id", jwtCheck, cancelBooking);
// router.post("/toFav/:rid", jwtCheck, toFav);
// router.post("/allFav/", jwtCheck, getAllFav);
// export { router as userRoute };

import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFav,
  toFav,
} from "../controllers/userCntrl.js"; // Ensure this path is correct
const router = express.Router();

router.post("/register", createUser); // Remove jwtCheck if you're not using JWT
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFav/:rid", toFav);
router.post("/allFav/", getAllFav);

export { router as userRoute };
