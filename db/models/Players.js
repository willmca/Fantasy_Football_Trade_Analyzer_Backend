const mongoose = require("../connection")
const Schema = mongoose.Schema

const RBSchema = new Schema ({
    Name:String,
    Team:String,
    Position:String,
    Rating:Number,
    PhotoURL:String
})

const RB = mongoose.model("RB", RBSchema)

module.exports = RB