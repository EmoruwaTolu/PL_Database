const {MongoClient} = require("mongodb");

let dbConnection;

module.exports = {
    connectToDB: (cb) => {
        MongoClient.connect('mongodb+srv://emoruwatoluwanimi:<password>@cluster0.rekr720.mongodb.net/PremierLeague365')
        .then((client) => {
            dbConnection = client.db();
            return cb();
        })
        .catch(err => {
            console.log(err);
            return cb(err);
        })
    },
    getDB: () => dbConnection
}
