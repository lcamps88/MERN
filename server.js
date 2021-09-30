const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('API running'))
const PORT = process.PORT || 5000
app.listen(PORT, () => console.log (`Server stared on port ${PORT}`))
