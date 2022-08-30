const { ApolloServer } = require('apollo-server')
const fs = require('fs')
const path = require('path');
const { PrismaClient } = require('@prisma/client')
const { getUserId } = require('./utils');
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')



const prisma = new PrismaClient()



const postFuntion = (parent, args, context, info) => {
    const newLink = context.prisma.link.create({
        data: {
            url: args.url,
            description: args.description,
        },
    })
    return newLink
}

const resolvers = {
    Query,
    Mutation,
    User,
    Link
}

//Para correr el servidor
const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    context: ({ req }) => {
        return {
            ...req,
            prisma,
            userId:
                req && req.headers.authorization
                    ? getUserId(req)
                    : null
        };
    }
})

server
    .listen()
    .then(({ url }) => console.log(`Server is running on ${url}`)
    );



