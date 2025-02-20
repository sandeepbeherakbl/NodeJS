const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ message: "URL is required" });
  }
  const ShortID = shortid();
  await URL.create({
    shortID: ShortID,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  return res.render("home", { id: ShortID });
}

async function handleGetAnalytics(req, res) {
  const shortID = req.params.shortID;
  const entry = await URL.findOne({ shortID });
  return res.json({
    totalCLicks: entry.visitHistory.length,
    analytics: entry.visitHistory,
  });
}

module.exports = { handleGenerateNewShortUrl, handleGetAnalytics };
