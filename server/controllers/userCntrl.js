// import asyncHandler from 'express-async-handler';
// import User from '../models/User.js'; // Mongoose User model import karein

// // User creation
// const createUser = asyncHandler(async (req, res) => {
//     console.log("Creating a user");

//     const { email } = req.body;

//     const userExists = await User.findOne({ email });

//     if (!userExists) {
//         const user = new User(req.body);
//         await user.save();
//         res.send({
//             message: "User created successfully",
//             user: user,
//         });
//     } else {
//         res.status(201).send({
//             message: "User already exists",
//         });
//     }
// });

// // Book visit for residency
// const bookVisit = asyncHandler(async (req, res) => {
//     const { email, date } = req.body;
//     const { id } = req.params;

//     const user = await User.findOne({ email });

//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     if (user.bookedVisits.some((visit) => visit.id === id)) {
//         res.status(400).json({ message: "Already booked" });
//     } else {
//         user.bookedVisits.push({ id, date });
//         await user.save();
//         res.status(200).send({ message: "Booked successfully" });
//     }
// });

// const getAllBookings = asyncHandler(async (req, res) => {
//     const { email } = req.body;

//     const user = await User.findOne({ email }, { bookedVisits: true });

//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).send(user);
// });

// const cancelBooking = asyncHandler(async (req, res) => {
//     const { email } = req.body;
//     const { id } = req.params;

//     const user = await User.findOne({ email });

//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     const index = user.bookedVisits.findIndex((visit) => visit.id === id);

//     if (index === -1) {
//         res.status(400).json({ message: "Not booked" });
//     } else {
//         user.bookedVisits.splice(index, 1);
//         await user.save();
//         res.status(200).send({ message: "Cancelled successfully" });
//     }
// });

// const toFav = asyncHandler(async (req, res) => {
//     const { email } = req.body;
//     const { rid } = req.params;

//     const user = await User.findOne({ email });

//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     if (user.favResidenciesID.includes(rid)) {
//         user.favResidenciesID = user.favResidenciesID.filter((id) => id !== rid);
//         await user.save();
//         res.status(200).send({ message: "Removed from fav", user });
//     } else {
//         user.favResidenciesID.push(rid);
//         await user.save();
//         res.status(200).send({ message: "Added to fav", user });
//     }
// });

// const getAllFav = asyncHandler(async (req, res) => {
//     const { email } = req.body;

//     const user = await User.findOne({ email }, { favResidenciesID: true });

//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).send(user);
// });

// export { createUser, bookVisit, getAllBookings, cancelBooking, toFav, getAllFav };

import asyncHandler from 'express-async-handler';
import User from '../models/User.js'; // Mongoose User model import karein

// User creation
const createUser = asyncHandler(async (req, res) => {
    console.log("Creating a user");

    const { email, name, password } = req.body; // Destructure required fields

    if (!email || !name || !password) {
        return res.status(400).json({ message: "Email, name, and password are required." });
    }

    const userExists = await User.findOne({ email });

    if (!userExists) {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ // 201 for successfully created
            message: "User created successfully",
            user: user,
        });
    } else {
        res.status(409).send({ // 409 Conflict for existing user
            message: "User already exists",
        });
    }
});

// Book visit for residency
const bookVisit = asyncHandler(async (req, res) => {
    const { email, date } = req.body;
    const { id } = req.params;

    if (!email || !date) {
        return res.status(400).json({ message: "Email and date are required." });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (user.bookedVisits.some((visit) => visit.id === id)) {
        return res.status(400).json({ message: "Already booked" });
    } else {
        user.bookedVisits.push({ id, date });
        await user.save();
        res.status(200).send({ message: "Booked successfully" });
    }
});

// Get all bookings
const getAllBookings = asyncHandler(async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required." });
    }

    const user = await User.findOne({ email }, { bookedVisits: true });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).send(user);
});

// Cancel booking
const cancelBooking = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;

    if (!email) {
        return res.status(400).json({ message: "Email is required." });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const index = user.bookedVisits.findIndex((visit) => visit.id === id);

    if (index === -1) {
        return res.status(400).json({ message: "Not booked" });
    } else {
        user.bookedVisits.splice(index, 1);
        await user.save();
        res.status(200).send({ message: "Cancelled successfully" });
    }
});

// Add or remove from favorites
const toFav = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { rid } = req.params;

    if (!email) {
        return res.status(400).json({ message: "Email is required." });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (user.favResidenciesID.includes(rid)) {
        user.favResidenciesID = user.favResidenciesID.filter((id) => id !== rid);
        await user.save();
        res.status(200).send({ message: "Removed from favorites", user });
    } else {
        user.favResidenciesID.push(rid);
        await user.save();
        res.status(200).send({ message: "Added to favorites", user });
    }
});

// Get all favorites
const getAllFav = asyncHandler(async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required." });
    }

    const user = await User.findOne({ email }, { favResidenciesID: true });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).send(user);
});

export { createUser, bookVisit, getAllBookings, cancelBooking, toFav, getAllFav };

