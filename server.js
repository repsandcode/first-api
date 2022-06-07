const { response } = require('express');
const express = require('express')
const app = express()
const PORT = 8000

const companies  = {
  ford: {
    'country-origin': 'United States of America',
    'favorite-car': 'Ford GT 40',
    'rating': 5
  },
  toyota: {
    'country-origin': ' Japan',
    'favorite-car': 'Toyota Supra',
    'rating': 5
  },
  nissan: {
    'country-origin': ' Japan',
    'favorite-car': 'Nissan GTR R35',
    'rating': 5
  },
  hyundai: {
    'country-origin': ' Japan',
    'favorite-car': '2004 Hyundai Starex GRX',
    'rating': 5
  }
};


app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
});


app.get('/api/:company', (req,res)=>{
  const company = req.params.company.toLowerCase()
  if (companies[company]) {
    res.json(companies[company])
  }else{
    res.json(companies[hyundai])
  }
});


app.listen(process.envi.PORT || PORT, ()=>{
  console.log(`The server is running on port ${PORT}`)
});