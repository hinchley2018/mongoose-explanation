const mongoose = require("mongoose")
const mongoURI = "mongodb://localhost:27017/travelr"

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to mongodb')
})

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

async function getDestinations() {
    const destinations = await DestinationModel.find()
    console.log("destinations", destinations)

    //grab off our first city
    console.log("first city", destinations[0])
}

getDestinations()