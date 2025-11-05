import db from "./db/connection.js";

const resolvers = {
 Subject: {
    id: (parent) => parent._id.toString(),
  },
  Query: {
    async subject(_, { id }) {
      let collection = await db.collection("subjects");
      let query = { _id: new ObjectId(id) };

      return await collection.findOne(query);
    },
    async subjects(_, __, context) {
      let collection = await db.collection("subjects");
      const subje = await collection.find({}).toArray();
      return records;
    },
  },
  Mutation: {
    async createRecord(_, { name, position, level }, context) {
      let collection = await db.collection("records");
      const insert = await collection.insertOne({ name, position, level });
      if (insert.acknowledged)
        return { name, position, level, id: insert.insertedId };
      return null;
    },
    async updateRecord(_, args, context) {
      const id = new ObjectId(args.id);
      let query = { _id: new ObjectId(id) };
      let collection = await db.collection("records");
      const update = await collection.updateOne(
        query,
        { $set: { ...args } }
      );

      if (update.acknowledged)
        return await collection.findOne(query);

      return null;
    },
    async deleteRecord(_, { id }, context) {
      let collection = await db.collection("records");
      const dbDelete = await collection.deleteOne({ _id: new ObjectId(id) });
      return dbDelete.acknowledged && dbDelete.deletedCount == 1 ? true : false;
    },
  },
};

export default resolvers;