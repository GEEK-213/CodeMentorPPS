const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express()
app.use(helmet())
app.use(cors({ origin: '*' }))
app.use(express.json())

app.get('/api/ping', (req, res) => res.json({ ok: true, ts: Date.now() }))

module.exports = app
