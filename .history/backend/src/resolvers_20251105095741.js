import db from "./db/connection.js";
import { ObjectId } from "mongodb";

const resolvers = {
 Subject: {
    id: (parent) => parent._id.toString(),
  },
  Query: {
    async subject(_, { id }) {
      let collection =db.collection("subjects");
      let query = { _id: new ObjectId(id) };

      return await collection.findOne(query);
    },
    async subjects(_, __, context) {
      let collection =db.collection("subjects");
      const subjects =collection.find({}).toArray();
      return subjects;
    },
  },
  Mutation: {
    async addSubject(_, { title,description }, context) {
      let collection = await db.collection("subjects");
      const insert = await collection.insertOne({ title,description });
      if (insert.acknowledged)
        return { title,description, id: insert.insertedId };
      return null;
    },
  
  },
};

export default resolvers;