import {MongoClient, ObjectId} from 'mongodb'
import express from 'express'
import bodyParser from 'body-parser'
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express'
import {makeExecutableSchema} from 'graphql-tools'
import cors from 'cors'
import {prepare} from "../util/index"


const app = express()

app.use(cors())

const homePath = '/admin'
const URL = 'http://localhost'
const PORT = 3666
const MONGO_URL = 'mongodb://localhost:27017/users'



export const start = async () => {
  try {
    const db = await MongoClient.connect(MONGO_URL)

    const Users = db.collection('users')

    const typeDefs = [`
      type Query {
        user(username: String): User
        users: [User]
      }
      type User {
        _id: String
        username: String
        password: String
        locations: [Location]
      }
      type Location {
        coords : [Coordination]
        timestamp : String
      }
      type Coordination {
        altitude : Int 
        altitudeAccuracy : Int 
        latitude : Float 
        accuracy : Int 
        longitude : Float 
        heading : Int 
        speed : Int 
      } 
      type Mutation {
        createUser(username: String, password: String): User
      }

      schema {
        query: Query
        mutation: Mutation
      }
    `];

    const resolvers = {
      Query: {
        user: async (root, {username}) => {
          return prepare(await Users.findOne(ObjectId(username)))
        },
        users: async () => {
          return (await Users.find({}).toArray()).map(prepare)
        },
      },
      Mutation: {
        createUser: async (root, args) => {
          const res = await Users.insertOne(args)
          return prepare(res.ops[0])
        },
      },
    }

    const schema = makeExecutableSchema({
      typeDefs,
      resolvers
    })


    app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))


    app.use(homePath, graphiqlExpress({
      endpointURL: '/graphql'
    }))

    app.listen(PORT, () => {
      console.log(`initialized at  ${URL}:${PORT}${homePath}`)
    })

  } catch (e) {
    console.log(e)
  }

}
