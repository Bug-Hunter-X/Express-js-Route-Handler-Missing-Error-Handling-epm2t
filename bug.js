const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // This will return a 404 status, but we should handle this better
    return res.status(404).send();
  }
  res.json(user);
});