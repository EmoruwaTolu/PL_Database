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
    const collection = db.collection('2023Tester');

    const data = await collection.find({}).toArray();
    res.json(data)
  } 
  catch(error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.get('/create/:statistic', async (req, res) => {
  try {
    // Assuming you've already initialized your MongoDB client
    
    // Connect to the MongoDB client
    await client.connect();
    const statistic = req.params.statistic;

    // Access the database and collection
    const db = client.db(dbName);
    const collection = db.collection('2023Tester');
    const cursor = collection.aggregate([
      // Match documents that have the "image" field
      { $match: { image: { $exists: true } } },
      
      // Project a new field to extract the first element of "goals90" array
      {
        $addFields: {
          returnableValue: { $arrayElemAt: [`$${statistic}`, 0] }
        }
      },
      
      // Sort documents based on the first element of "goals90" array
      { $sort: { returnableValue: -1 } },
      
      // Limit the result to the top 100 documents
      { $limit: 100 }
    ])

    // Convert the cursor to an array of documents
    const data = await cursor.toArray();

    // Log the retrieved data
    console.log(data);

    // Respond with the data as JSON
    res.json(data);
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Close the connection when done
    // client.close();
  }
});

app.get('/explore-players', async(req,res) => {
  try {
    await client.connect()

    const db = client.db(dbName);
    const collection = db.collection('2023Tester');

    const data = await collection.aggregate([{$match: {"image":{$ne:null}}}, {$sample: {size: 3}}]).toArray();
    res.json(data)
  }
  catch(error){
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.get('/blog-posts', async(req,res) => {
  try {
    await client.connect()

    const db = client.db(dbName);
    const collection = db.collection('BlogPosts');

    const data = await collection.find().toArray();
    console.log(data)
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

    const dataOverall =  await collectionOverall.find({matchesPlayed: "38"}).toArray();
    const dataHome = await collectionOverall.find({location: "Home"}).toArray();
    const dataAway = await collectionOverall.find({location: "Away"}).toArray();

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
    const collection = db.collection('2023Tester');

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
    client.close(); 
  }
})

app.get('/player/:name', async (req, res) => {
  try {
    await client.connect();

    const playerName = req.params.name;

    const db = client.db(dbName);
    const collection = db.collection('2023Tester');

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
    client.close(); 
  }
})

app.get('/PremierLeague2022-23/:position', async (req, res) => {
  try {
    await client.connect();

    const position = req.params.position;

    const db = client.db(dbName);
    const collection = db.collection('2023Tester');

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
    client.close();
  }
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});

