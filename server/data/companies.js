const {MongoClient} = require("mongodb");

let companies = [];

const getCompanies = async () => {
    const client = new MongoClient("mongodb://localhost:27017", {
        useUnifiedTopology: true,
    });

    await client.connect();
    const db = client.db("e_commerce");

    companies = await db.collection("companies")
        .find()
        .toArray()

    client.close()

    return companies;
}

module.exports = { getCompanies }
