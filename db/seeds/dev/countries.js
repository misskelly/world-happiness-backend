const { countries, jobs } = require('../data');
const { cleanJob, cleanCountry } = require('../../../helpers/cleaners');

exports.seed = function (knex, Promise) {
  return knex('job_postings').del()
    .then(() => knex('countries').del())
    .then(() => knex.raw('TRUNCATE TABLE job_postings RESTART IDENTITY CASCADE'))
    .then(() => knex.raw('TRUNCATE TABLE countries RESTART IDENTITY CASCADE'))
    .then(() => {
      let countryPromises = [];

      countries.forEach(country => {
        countryPromises.push(createCountry(knex, country));
      });
      return Promise.all(countryPromises);
    })
    .then(() => console.log('Seeding complete!'))
    .catch(error => console.log(`error seeding data: ${error}`)) 
};


const createCountry = (knex, country) => {
  const cleanedCountry = cleanCountry(country);
  return knex('countries').insert(cleanedCountry, 'id')
    .then(countryId => {
      let jobPromises = [];
      jobs.forEach(job => {
        if (job.country === country.name) {
          const cleanJob = {
            title: job.title,
            company: job.company,
            url: job.url,
            location: `${job.location}, ${job.country}`,
            country_id: countryId[0]
          }
          console.log(cleanJob)
          jobPromises.push(createJob(knex, cleanJob))
        };
      });
      return Promise.all(jobPromises)
    });
}
const createJob = (knex, job) => {
  return knex('job_postings').insert(job)
}
