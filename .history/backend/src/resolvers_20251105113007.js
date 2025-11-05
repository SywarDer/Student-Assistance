import db from "./db/connection.js";
import { ObjectId } from "mongodb";

const resolvers = {
 Subject: {
    id: (parent) => parent._id.toString(),
  },
  Query: {
    async subject(_, { id }) {
      let collection =db.collection("subjects");
      let query = { _id: ObjectId.createFromHexString(id)};

      return await collection.findOne(query);
    },
    async subjects(_, __, context) {
    const userId = context.user.id;
    let collection = db.collection("subjects");

    return await collection.find({ userId }).toArray();
  },
  },
  Mutation: {
    async addSubject(_, { title,description }, context) {
      const userId = context.user.id;
      let collection =db.collection("subjects");
      const insert =collection.insertOne({ title,description,user });
      if (insert.acknowledged)
        return { title,description, id: insert.insertedId };
      return null;
    },
  
  },
};

export default resolvers;