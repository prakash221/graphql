const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')
// process env
require('dotenv').config()
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
} = require('graphql')

const app = express()

// Replace 'your-mongodb-uri' with your MongoDB connection string
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
})

const db = mongoose.connection

db.once('open', () => {
	console.log('Connected to MongoDB')
})
