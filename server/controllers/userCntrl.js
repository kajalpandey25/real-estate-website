import asyncHandler from 'express-async-handler';
import User from '../models/User.js'; // Mongoose User model import karein

// User creation
const createUser = asyncHandler(async (req, res) => {
    console.log("Creating a user");

    const { email } = req.body;

    const userExists = await User.findOne({ email });

    if (!userExists) {
        const user = new User(req.body);
        await user.save();
        res.send({
            message: "User created successfully",
            user: user,
        });
    } else {
        res.status(201).send({
            message: "User already exists",
        });
    }
});

// Book visit for residency
const bookVisit = asyncHandler(async (req, res) => {
    const { email, date } = req.body;
    const { id } = req.params;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (user.bookedVisits.some((visit) => visit.id === id)) {
        res.status(400).json({ message: "Already booked" });
    } else {
        user.bookedVisits.push({ id, date });
        await user.save();
        res.status(200).send({ message: "Booked successfully" });
    }
});

const getAllBookings = asyncHandler(async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email }, { bookedVisits: true });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).send(user);
});

const cancelBooking = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const index = user.bookedVisits.findIndex((visit) => visit.id === id);

    if (index === -1) {
        res.status(400).json({ message: "Not booked" });
    } else {
        user.bookedVisits.splice(index, 1);
        await user.save();
        res.status(200).send({ message: "Cancelled successfully" });
    }
});

const toFav = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { rid } = req.params;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (user.favResidenciesID.includes(rid)) {
        user.favResidenciesID = user.favResidenciesID.filter((id) => id !== rid);
        await user.save();
        res.status(200).send({ message: "Removed from fav", user });
    } else {
        user.favResidenciesID.push(rid);
        await user.save();
        res.status(200).send({ message: "Added to fav", user });
    }
});

const getAllFav = asyncHandler(async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email }, { favResidenciesID: true });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).send(user);
});

export { createUser, bookVisit, getAllBookings, cancelBooking, toFav, getAllFav };
