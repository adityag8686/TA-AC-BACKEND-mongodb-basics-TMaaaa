// - create a database named `mountains`
use mountains 
// - a collection inside that database named `himalayas`
db.createCollection("himalayas")
// - insert 1 document into that collection `{name: 'Dhauldhar range', height: '4000 mtrs'}`
db.himalayas.insert({name : "Dhauladhar Range" , height : '4000 mts'})
db.find.pretty()

// - insert multiple document using insertMany command
db.himalayas.insertMany([{name : "Mountain Everest" , height : '8848 mts'},{name : "Nanda Devi" , height : '7000 mtrs'}])
// Now after inserting all the data now getting the data  // output 
// - find all documents from mountains
db.himalayas.find().pretty()
{
        "_id" : ObjectId("623091bdf7a7a49723dbfaf8"),
        "name" : "Dhauladhar Range",
        "height" : "4000 mrts"
}
{
        "_id" : ObjectId("6230938bf7a7a49723dbfafb"),
        "name" : "Mountain Everest",
        "height" : "8848 mrts"
}
{
        "_id" : ObjectId("6230938bf7a7a49723dbfafc"),
        "name" : "Nanda Devi",
        "height" : "7000 mtrs"
}

// Now by using query getting only few data 
// I have  serarched for the Mountain Everest  document only 
// - find a single document using name
db.himalayas.findOne({name:"Mountain Everest"})
{
        "_id" : ObjectId("6230938bf7a7a49723dbfafb"),
        "name" : "Mountain Everest",
        "height" : "8848 mrts"
}