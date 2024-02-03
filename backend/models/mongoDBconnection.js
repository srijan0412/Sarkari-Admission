const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL=process.env.MONGODB_URL
exports.connectDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log(`DB connected`);
    } catch (error) {
        console.log(error.message);
    }
};
