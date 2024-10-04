// import mongoose from 'mongoose';

// const residencySchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     address: { type: String, required: true, unique: true },
//     country: { type: String, required: true },
//     city: { type: String, required: true },
//     facilities: { type: [String], required: true },
//     image: { type: String, required: true },
//     owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming 'User' model is created
// }, { timestamps: true });

// const Residency = mongoose.model('Residency', residencySchema);

// export default Residency;

import mongoose from 'mongoose';

// Define the residency schema
const residencySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 }, // Ensure price is a positive number
    address: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    facilities: { type: [String], required: true },
    image: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Assuming 'User' model is created
  },
  { timestamps: true } // Automatically create createdAt and updatedAt fields
);

// Create the Residency model
const Residency = mongoose.model('Residency', residencySchema);

export default Residency;
