import mongoose from 'mongoose';

const residencySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    address: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    facilities: { type: [String], required: true },
    image: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming 'User' model is created
}, { timestamps: true });

const Residency = mongoose.model('Residency', residencySchema);

export default Residency;
