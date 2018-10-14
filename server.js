require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const locations = 
[
  { tripid: 1, date: process.env.date1, country: 'United States', address: 'Miami', latitude: 25.761681, longitude: -80.191788},  
  { tripid: 1, date: process.env.date2, country: 'Bahamas', address: 'Nassau', latitude: 25.105925, longitude: -77.300491},  
  { tripid: 1, date: process.env.date3, country: 'NA', address: 'NA', latitude: 24.837024, longitude: -79.283524},
  { tripid: 1, date: process.env.date4, country: 'United States', address: 'Miami', latitude: 25.761681, longitude: -80.191788},  

  { tripid: 2, date: process.env.date1, country: 'United States', address: 'Seattle', latitude: 47.335565, longitude: -123.644257},  
  { tripid: 2, date: process.env.date2, country: 'Canada', address: 'Graham Island', latitude: 53.580634, longitude: -132.693300},  
  { tripid: 2, date: process.env.date3, country: 'United States', address: 'Kodiak Island', latitude: 57.275517, longitude: -152.959557},
  { tripid: 2, date: process.env.date4, country: 'United States', address: 'Seattle', latitude: 47.335565, Longitude: -123.644257}
];

app.get('/api/locations', (req, res) => {
  res.send(locations);
});

app.get('/api/locations/:tripid/:date', (req, res) => {

  var arrFound = locations.filter(function(item) {
    return item.tripid == parseInt(req.params.tripid);
  });

  console.log(arrFound);

  var location = arrFound.filter(function(item){
    // return item.date == parseInt(req.params.date);
    return item.date === req.params.date
  });  
  console.log(location);  
  
  if (!location) return res.status(404).send('The location with the given Trip was not found.');
  res.send(location);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));