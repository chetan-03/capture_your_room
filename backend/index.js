const express = require('express');
var cors = require('cors')
const connectToMongo = require('./db.js')
const app = express()
const port = 4000
connectToMongo()
require('dotenv').config()
//  To get api calls in fornt end
app.use(cors())
app.use(express.json())
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(process.env.PORT || port, function () {
    console.log(`Express server listening on port ${ this.address().port } in ${ app.settings.env } mode`);
});
