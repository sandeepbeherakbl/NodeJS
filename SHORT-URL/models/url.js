const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortID: { type: String, required: true, unique: true }, // unique ID for short URL
    redirectUrl: { type: String, required: true }, // URL to redirect to
    visitHistory: [{ timestamp: { type: Number } }], // array of
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
