import mongoose from "mongoose";

// This is the schema which consists of data in the form of objects and we can send the data into Mongodb with this schema by using POST method.

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        batch: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
);

export default mongoose.model("user", userSchema);