const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;

app.use(bodyParser.json())

//set up author routes
const authorRouter = require('./routes/authorRouter')

app.get("/", (req, res) => {
    res.send("<h1>Library System </h1>")
})

// Author management requests
app.use('/author-management', authorRouter)

// Run the app
app.listen(port, () => {
    console.log(`Express app is listening on port http://localhost:${port}`)
});