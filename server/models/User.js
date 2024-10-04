// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     bookedVisits: [{ id: String, date: Date }],
//     favResidenciesID: [String],
// });

// const User = mongoose.model('User', userSchema);

// export default User;

import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    bookedVisits: [
      {
        id: { type: String, required: true }, // Ensure that ID is required
        date: { type: Date, required: true }, // Ensure that date is required
      },
    ],
    favResidenciesID: [{ type: String }], // Array of residency IDs
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;
