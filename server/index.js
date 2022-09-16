const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');
require('dotenv').config()



const typeDefs = gql`
    type Query{
        hello: String!
    }
`

const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Mongodb connected!');
    return server.listen({ port: 5000})
}).then(res => {
    console.log(`Server running at ${res.url}`)
})