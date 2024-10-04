// import express from 'express';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import { userRoute } from './routes/userRoute.js';
// import { residencyRoute } from './routes/residencyRoute.js';


// dotenv.config()

// const app = express();

// const PORT = process.env.PORT || 3000;

// app.use(express.json())
// app.use(cookieParser())
// app.use(cors())

// app.listen(PORT, ()=> {
//     console.log(`Server is running on port ${PORT}`);
// });

// app.use('/api/user', userRoute)
// app.use("/api/residency", residencyRoute)

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';

dotenv.config();

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/meteryard"; // Update accordingly
mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/user', userRoute);
app.use('/api/residency', residencyRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

