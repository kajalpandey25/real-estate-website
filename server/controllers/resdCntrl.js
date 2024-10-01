import asyncHandler from "express-async-handler";
import Residency from "../models/Residency.js"; // Mongoose Residency model import karein

// Create residency
export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);
  
  try {
    const residency = new Residency({
      title,
      description,
      price,
      address,
      country,
      city,
      facilities,
      image,
      owner: userEmail, // Assuming userEmail is the owner's email
    });

    await residency.save();

    res.send({ message: "Residency created successfully", residency });
  } catch (err) {
    // Check for unique validation error
    if (err.code === 11000) {
      throw new Error("A residency with this address already exists");
    }
    throw new Error(err.message);
  }
});

// Get all residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
  const residencies = await Residency.find().sort({ createdAt: -1 });
  res.send(residencies);
});

// Get a specific residency
export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await Residency.findById(id);
    if (!residency) {
      return res.status(404).send({ message: "Residency not found" });
    }
    res.send(residency);
  } catch (err) {
    throw new Error(err.message);
  }
});
