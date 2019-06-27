const express = require('express')
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const { cleanJob, cleanCountry } = require('./helpers/cleaners');
const app = express()
app.use(express.json())

app.set('port', process.env.PORT || 3000)
app.listen(process.env.PORT || 3000, () => console.log(`Happiness jobs is running at http://localhost:${app.get('port')}.`))

app.get('/api/v1/countries', (req, res) => {
  database('countries').select()
    .then((countries) => {
      res.status(200).json(countries);
    })
    .catch((error) => {
      res.status(500).json(`Uh oh, we ran into a problem: ${error}`);
    })
});

app.get('/api/v1/jobs', (req, res) => {
  database('job_postings').select()
    .then((job_postings) => {
      res.status(200).json(job_postings);
    })
    .catch((error) => {
      res.status(500).json({
        error: `Uh oh, we ran into a problem: ${error}`
      });
    })
});

app.get('/api/v1/countries/:id', (req, res) => {
  const countryId = parseInt(req.params.id);
  database('countries').where('id', countryId).select()
    .then(country => {
      if (!country) {
        res.status(404).json(`Aw dang. Nothing here.`);
      } 
      res.status(200).json(country);
    })
    .catch(err => {
        res.status(500).json(`Uh oh, we ran into a problem: ${err}`);
      })
});

app.get('/api/v1/jobs/:id', (req, res) => {
  const jobId = parseInt(req.params.id);
  database('job_postings').where('id', jobId).select()
    .then(job => {
      if (!job) {
        console.log(job)
        res.status(404).json(`Aw dang. Nothing here.`);
      } 
      res.status(200).json(job);
    })
    .catch(err => {
        res.status(500).json(`Uh oh, we ran into a problem: ${err}`);
      });
});



app.post('/api/v1/jobs', (req, res) => {
  const job = req.body;

  for (let requiredParameter of ['title', 'company', 'url', 'location', 'country']) {
    if (!job[requiredParameter]) {
      return res
        .status(422)
        .send({
          error: `Expected format: { title: <String>, company: <String>, url: <String>, location: <String>, country: <String> }. You're missing a "${requiredParameter}" property.`
        });
    }
  }
  database('countries').where('name', job.country).select()
  database('job_postings').insert(job, 'id')
    .then(job => {
    res.status(201).json({ id: job[0] })
  })
    .catch(err => {
    res.status(500).json(`Oh no. Something bad happened: ${err}`)
  });
});



app.post('/api/v1/countries', (req, res) => {
  const country = req.body;

  for (let requiredParameter of ['name', 'ladder', 'corruption', 'generosity']) {
    if (!country[requiredParameter]) {
      return res
        .status(422)
        .send({
          error: `Expected format: { name: <String>, ladder: <String>, corruption: <String>, generosity: <String> }. You forgot a "${requiredParameter}" property.`
        });
    }
  }

  database('countries').insert(country, 'id')
  .then(country => {
    res.status(201).json({ id: country[0] })
  })
  .catch(err => {
    res.status(500).json(`Oh no. Something bad happened: ${err}`)
  });
});
