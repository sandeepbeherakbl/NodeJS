const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortUrl,
  handleGetAnalytics,
} = require("../controllers/url");

// POST /api/url/shorten
// Create short URL
// This route will take a URL and return a shortened version of it.
router.post("/", handleGenerateNewShortUrl);

// GET /api/url/analytics/:shortID
// Get analytics for short URL
// This route will return the number of times the short URL has been visited and the timestamp of each visit.
router.get("/analytics/:shortID", handleGetAnalytics);

module.exports = router;
