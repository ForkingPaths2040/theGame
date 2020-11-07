const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Log = new Schema(
  {
    date: { type: String, required: true },
    source: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("logs", Log);