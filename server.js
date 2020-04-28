const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const axios = require('axios')
const {parse, stringify} = require('flatted/cjs');
const cheerio = require('cheerio')




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.get('/api', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api', (req, res) => {
  console.log('req', req.body)
  // console.log('res', res)
  // res.send({ express: 'Hello From Express' });
  // const data = searchData(req.body.searchTerms);
  // console.log('data', data)
  //stars class a-icon-alt
  //num of reviews class a-size-base
  // const $ = searchData(req.body.searchTerms);
  // const example = $('.s-result-list s-search-results sg-row')
  console.log(searchData(req.body.searchTerms))
});

async function searchData (searchTerms) {
  try {
    const {data: html} = await axios.get(`https://www.amazon.com/s?k=${searchTerms}`);
    console.log(stringify(amazonData))
    // res.send({hi: 'does this work', data: stringify(amazonData)})
    // return cheerio.load(amazonData.data);
    return html
  } catch(error) {  
    console.error(error);
  }
}

// axios.post(`https://www.amazon.com/s?k=${searchTerms}
// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

app.listen(port, () => console.log(`Listening on port ${port}`));