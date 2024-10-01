import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    bookedVisits: [{ id: String, date: Date }],
    favResidenciesID: [String],
});

const User = mongoose.model('User', userSchema);

export default User;
