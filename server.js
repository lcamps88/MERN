const express = require('express')
const ConnectDB = require('./config/db')
const app = express()

//Connect DB
ConnectDB()

// Init Middleware
app.use(express.json({extends: false}))

app.get('/', (req, res) => res.send('API running'))

//Define routes
app.use('api/posts', require('./routes/api/posts'));
app.use('api/users', require('./routes/api/users'));
app.use('api/phones', require('./routes/api/phoneslist'));
app.use('api/carriers', require('./routes/api/carriers'));

const PORT = process.PORT || 5000
app.listen(PORT, () => console.log (`Server stared on port ${PORT}`))
