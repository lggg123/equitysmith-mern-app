const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
                type: String,
                required: true,
        },
        phone_number: {
            type: String,
            required: false,
        },
        message: {
            type: String,
            required: true,
        },
        
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Form", FormSchema);