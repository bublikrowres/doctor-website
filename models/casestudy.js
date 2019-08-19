const mongoose = require("mongoose");

// schema set-up
var caseSchema = new mongoose.Schema({
    title: String,
    image: [String],
    description1: String,
    description2: String,
    description3: String,
    gear: [String],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

module.exports = mongoose.model('case', caseSchema);