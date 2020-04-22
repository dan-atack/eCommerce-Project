const {MongoClient} = require("mongodb");

let items = [];

const getItems = async () => {
    const client = new MongoClient("mongodb://localhost:27017", {
        useUnifiedTopology: true,
    });

    await client.connect();
    const db = client.db("e_commerce");

    items = await db.collection("items")
        .find()
        .toArray()

    client.close()
    
    return items;
}

module.exports = { getItems }
