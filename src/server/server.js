import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

// Render static index route
app.use(express.static(path.join(__dirname,'../client')));

app.listen(port, () => {
  console.log(`app.js has been served on port: ${port}`);
});
