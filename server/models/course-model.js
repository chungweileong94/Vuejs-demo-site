const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: String,
    lecturer: { type: Schema.Types.ObjectId, ref: "user" }
});

const Course = mongoose.model("course", courseSchema);

module.exports = Course;