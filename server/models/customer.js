import mongoose from "mongoose";

const customerDetailSchema = mongoose.Schema({
    name: String,
    email: String,
    age: String,
    phoneNumber: Number,
    gender: String,
    timeSlot: String,
})

var CustomerDetails = mongoose.model('CustomerDetails', customerDetailSchema);

export default CustomerDetails;