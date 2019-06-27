

const cleanJob = (job) => ({
  title: job.title,
  company: job.company,
  url: job.url,
  location: `${job.location}, ${job.country}`,
  country_id: countryId[0]
});

const cleanCountry = (country) => ({
  name: country.name,
  ladder: country.ladder,
  corruption: country.corruption,
  generosity: country.generosity
});

module.exports = {
  cleanJob,
  cleanCountry
}