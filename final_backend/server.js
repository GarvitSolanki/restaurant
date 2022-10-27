const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 3002;
const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use('/api', routes);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))