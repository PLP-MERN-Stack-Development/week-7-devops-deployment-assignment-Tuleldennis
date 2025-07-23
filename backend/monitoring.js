const express = require('express');
const app = express();

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Uptime Monitoring
app.get('/uptime', (req, res) => {
  res.status(200).json({ uptime: process.uptime() });
});

module.exports = app;
