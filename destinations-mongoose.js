//grab the mongoose package
const mongoose = require("mongoose")

//connection string to a mongodb running locally
// normally you should get this from an .env file
const mongoURI = "mongodb://localhost:27017/travelr"

//connect to the database
//again in production apps don't print this uri
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log(`connected to mongodb ${mongoURI}`)
})

//define the schema our app will use to connect to this database
const destinationSchema = new mongoose.Schema({
    city: {type: String, required: true},
    country: String,
    continent: String,
    primary_language: String,
    timezone: String,
    currency: String,
    tickets_available: Number,
})

//connect our database collection using this schema
const DestinationModel = mongoose.model('destinations', destinationSchema)

//some .find queries
async function getDestinations() {
    const destinations = await DestinationModel.find()
    console.log("destinations", destinations)

    //grab off our first city
    console.log("first city", destinations[0])
}

getDestinations()