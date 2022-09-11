const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const route = require('./Routs/index');

app.use('/weather', route);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});