const express = require('express')
const graphql = require('express-graphql')
const app = express()
app.listen(4000)

const schema = require('./schema')


app.use('/graphql',graphql({
    graphiql: true,
    schema
}))
