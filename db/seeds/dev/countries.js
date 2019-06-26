const { countries, jobs } = require('../data')

exports.seed = function (knex, Promise) {
  return knex('countries').del()
    .then(() => knex('job_postings').del())
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
  return knex('countries').insert({
    name: country.name,
    ladder: country.ladder,
    corruption: country.corruption,
    generosity: country.generosity
  }, 'id')
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
