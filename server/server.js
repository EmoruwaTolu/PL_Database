const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();

const uri = 'mongodb+srv://emoruwatoluwanimi:AndreGray17@cluster0.rekr720.mongodb.net/';
const dbName = 'PremierLeague365';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.get('/searchSuggest', async (req, res) => {
  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('PremierLeague2022-23');

    const data = await collection.find({}).toArray();
    res.json(data)
  } 
  catch(error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  finally {
    //client.close(); // Close the connection when done
  }
})

app.get('/calculate-percentiles', async (req, res) => {
  try {

    await client.connect();
    const db = client.db(dbName);
    // Your MongoDB aggregation pipeline code to calculate percentiles
    console.log("here")
    const result = await db.collection('PremierLeague2022-23').aggregate([
      {
        $sort: {"shooting_stats.shots90": 1}
      },
      {
        $group: {
          _id: null,
          data: { $push: "$shooting_stats.shots90" },
          count: { $sum: 1 }
        }
      },
      
    ]).toArray();

    // Return the calculated percentiles as a JSON response
    res.json(result);
  } catch (error) {
    console.error('Error calculating percentiles: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/explore-players', async(req,res) => {
  try {
    await client.connect()

    const db = client.db(dbName);
    const collection = db.collection('PremierLeague2022-23');

    const data = await collection.aggregate([{$match: {"image":{$ne:null}}}, {$sample: {size: 3}}]).toArray();
    res.json(data)
  }
  catch(error){
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.get('/seasonInformation', async(req, res) => {
  try{
    await client.connect()

    const db =  client.db(dbName);

    const collectionOverall = db.collection('PremierLeagueTeamSeasonsOverall');
    const collectionHome  =  db.collection('PremierLeagueTeamSeasonsHome');
    const collectionAway = db.collection('PremierLeagueTeamSeasonsAway');

    const dataOverall =  await collectionOverall.find({}).toArray();
    const dataHome = await collectionHome.find({}).toArray();
    const dataAway =  await collectionAway.find({}).toArray();

    res.json([dataOverall, dataHome, dataAway]);
  }
  catch(error){
    console.error('Error occurred fetching data', error);
    res.status(500).json({error: 'Internal Server error'});
  }
})


app.get('/team/:name', async (req, res) => {
  try {
    await client.connect();

    const teamName = req.params.name;

    const db = client.db(dbName);
    const collection = db.collection('PremierLeague2022-23');

    console.log(teamName)

    const data = await collection.find({club: teamName}).toArray();
    console.log(data)
    res.json(data)
  }
  catch(error){
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  finally {
    client.close(); // Close the connection when done
  }
})

app.get('/player/:name', async (req, res) => {
  try {
    await client.connect();

    const playerName = req.params.name;

    const db = client.db(dbName);
    const collection = db.collection('PremierLeague2022-23');

    console.log(playerName)

    const data = await collection.find({name: playerName}).toArray();
    console.log(data)
    res.json(data)
  }
  catch(error){
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  finally {
    client.close(); // Close the connection when done
  }
})

app.get('/PremierLeague2022-23/:position', async (req, res) => {
  try {
    await client.connect();

    const position = req.params.position;

    const db = client.db(dbName);
    const collection = db.collection('PremierLeague2022-23'); // Replace with your collection name

    if(position === "Attackers"){
      const data = await collection.find({ $or: [{position: "FW"}, {position: "AM"}] }).toArray();
      res.json(data);
    }
    else if(position === "Midfielders"){
      const data = await collection.find({ $or: [{position: "AM"}, {position: "MF"}] }).toArray();
      res.json(data);
    }
    else if(position === "Fullbacks"){
      const data = await collection.find({position: "FB"}).toArray();
      res.json(data);
    }
    else if(position === "Centrebacks"){
      const data = await collection.find({position: "CB"}).toArray();
      res.json(data);
    }

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.close(); // Close the connection when done
  }
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});

