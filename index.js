
const {ApolloServer}=require("apollo-server");
const mongoose=require("mongoose")
const typeDefs=require("./graphql/typeDefs")
const resolvers=require("./graphql/resolvers")

const MONGODB="mongodb+srv://graphql:aIMLHkwQ5zrwpEcJ@graphql.dqfoz.mongodb.net/?retryWrites=true&w=majority"

const server=new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB).then(()=>{
    console.log("Mongoose Connect");
    return server.listen({port:5000})
}).then((res)=>{
    console.log(`Server running at ${res.url}`);
})