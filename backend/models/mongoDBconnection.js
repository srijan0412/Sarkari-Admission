const mongoose = require("mongoose");

exports.connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/sarkariAdmission');
        console.log(`DB connected`);
    } catch (error) {
        console.log(error.message);
    }
};