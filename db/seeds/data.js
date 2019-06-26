const countries = [{
    "name": "Finland",
    "ladder": 1,
    "corruption": 4,
    "generosity": 47
  },
  {
    "name": "Denmark",
    "ladder": 2,
    "corruption": 3,
    "generosity": 22
  },
  {
    "name": "Norway",
    "ladder": 3,
    "corruption": 8,
    "generosity": 11
  },
  {
    "name": "Iceland",
    "ladder": 4,
    "corruption": 45,
    "generosity": 3
  },
  {
    "name": "Netherlands",
    "ladder": 5,
    "corruption": 12,
    "generosity": 7
  },
  {
    "name": "Switzerland",
    "ladder": 6,
    "corruption": 7,
    "generosity": 16
  },
  {
    "name": "Sweden",
    "ladder": 7,
    "corruption": 6,
    "generosity": 17
  },
  {
    "name": "New Zealand",
    "ladder": 8,
    "corruption": 5,
    "generosity": 8
  },
  {
    "name": "Canada",
    "ladder": 9,
    "corruption": 11,
    "generosity": 14
  },
  {
    "name": "Austria",
    "ladder": 10,
    "corruption": 19,
    "generosity": 25
  },
  {
    "name": "Australia",
    "ladder": 11,
    "corruption": 13,
    "generosity": 6
  },
  {
    "name": "Costa Rica",
    "ladder": 12,
    "corruption": 58,
    "generosity": 75
  },
  {
    "name": "Israel",
    "ladder": 13,
    "corruption": 74,
    "generosity": 24
  },
  {
    "name": "Luxembourg",
    "ladder": 14,
    "corruption": 9,
    "generosity": 30
  },
  {
    "name": "United Kingdom",
    "ladder": 15,
    "corruption": 15,
    "generosity": 4
  },
  {
    "name": "Ireland",
    "ladder": 16,
    "corruption": 10,
    "generosity": 9
  },
  {
    "name": "Germany",
    "ladder": 17,
    "corruption": 17,
    "generosity": 19
  },
  {
    "name": "Belgium",
    "ladder": 18,
    "corruption": 20,
    "generosity": 44
  },
  {
    "name": "United States",
    "ladder": 19,
    "corruption": 42,
    "generosity": 12
  },
  {
    "name": "Czech Republic",
    "ladder": 20,
    "corruption": 121,
    "generosity": 117
  },
  {
    "name": "United Arab Emirates",
    "ladder": 21,
    "corruption": null,
    "generosity": 15
  },
  {
    "name": "Malta",
    "ladder": 22,
    "corruption": 32,
    "generosity": 5
  },
  {
    "name": "Mexico",
    "ladder": 23,
    "corruption": 87,
    "generosity": 120
  },
  {
    "name": "France",
    "ladder": 24,
    "corruption": 21,
    "generosity": 68
  },
  {
    "name": "Taiwan",
    "ladder": 25,
    "corruption": 56,
    "generosity": 56
  },
  {
    "name": "Chile",
    "ladder": 26,
    "corruption": 99,
    "generosity": 45
  },
  {
    "name": "Guatemala",
    "ladder": 27,
    "corruption": 82,
    "generosity": 78
  },
  {
    "name": "Saudi Arabia",
    "ladder": 28,
    "corruption": null,
    "generosity": 82
  },
  {
    "name": "Qatar",
    "ladder": 29,
    "corruption": null,
    "generosity": null
  },
  {
    "name": "Spain",
    "ladder": 30,
    "corruption": 78,
    "generosity": 50
  },
  {
    "name": "Panama",
    "ladder": 31,
    "corruption": 104,
    "generosity": 88
  },
  {
    "name": "Brazil",
    "ladder": 32,
    "corruption": 71,
    "generosity": 108
  },
  {
    "name": "Uruguay",
    "ladder": 33,
    "corruption": 33,
    "generosity": 80
  },
  {
    "name": "Singapore",
    "ladder": 34,
    "corruption": 1,
    "generosity": 21
  },
  {
    "name": "El Salvador",
    "ladder": 35,
    "corruption": 85,
    "generosity": 134
  },
  {
    "name": "Italy",
    "ladder": 36,
    "corruption": 128,
    "generosity": 48
  },
  {
    "name": "Bahrain",
    "ladder": 37,
    "corruption": null,
    "generosity": 23
  },
  {
    "name": "Slovakia",
    "ladder": 38,
    "corruption": 142,
    "generosity": 70
  },
  {
    "name": "Trinidad and Tobago",
    "ladder": 39,
    "corruption": 141,
    "generosity": 41
  },
  {
    "name": "Poland",
    "ladder": 40,
    "corruption": 108,
    "generosity": 77
  }
]

const jobs =
 [
{
  title: 'HTML/Web Developer',
  company: 'Framestore',
  url: 'https://jobs.github.com/positions/7df70ee3-d06e-466a-9e19-3543a73e8faf',
  location: 'London',
  country:  'United Kingdom'
}, {
  title: 'Mobile Engineer',
  company: 'National Audubon Society',
  url: 'https://jobs.github.com/positions/452dd4ac-0696-4a50-b0a1-e27fdab3c076',
  location: 'New York, New, York',
  country:  'United States'
}, {
  title: 'Web Developer',
  company: 'Mapbox',
  url: 'https://jobs.github.com/positions/0af6c7df-cc8a-4b46-88f5-ced93f1c37a9',
  location: 'San Francisco or Washington D.C.',
  country: 'United States'
}, {
  title: 'JavaScript Senior Developer (m/w/d)',
  company: 'CHECK"ç',
  url: 'https://jobs.github.com/positions/b78e097d-1459-444f-ad00-2a6cc0e7bce1',
  location: 'Hamburg, Germany',
  country: 'Germany'
}, {
  title: 'Software/Senior Software Engineer',
  company: 'EDR',
  url: 'https://jobs.github.com/positions/e4e8ba8e-eb9c-4d6e-b93d-7f2a83195cd7',
  location: 'San Luis Obispo, CA',
  country: 'United States'
}, {
  title: 'Software Engineer',
  company: 'Noordhoff Uitgevers',
  url: 'https://jobs.github.com/positions/14dcebe4-49fd-4953-a53b-a999c0d5bfeb',
  location: 'Utrecht / Groningen',
  country: 'Netherlands',
}, {
  title: 'Lead Software Engineer',
  company: 'BCG Platinion WESA ',
  url: 'https://jobs.github.com/positions/9f96041e-99bb-4718-b9cb-257a2b0e1c83',
  location: 'LONDON',
  country: 'United Kingdom'
}, {
  title: 'SOLUTION ENGINEER (M/F/X)',
  company: 'QuaJoo GmbH',
  url: 'https://jobs.github.com/positions/634dfde3-8959-4874-a610-09140ebdd30f',
  location: 'Leipzig',
  country: 'Germany'
}, {
  title: 'Drupal Software Engineer',
  company: 'Aten Design Group',
  url: 'https://jobs.github.com/positions/5f1c6d7b-c4aa-430f-a367-e6980d83071b',
  location: 'Denver, Colorado or U.S. Remote',
  country: 'United States'
}, {
  title: 'Web Developer - Ecommerce',
  company: 'CityPASS',
  url: 'https://jobs.github.com/positions/47b7c94c-2aaf-49e7-9f29-f10f7bab0e91',
  location: 'Salt Lake City, UT',
  country: 'United States'
}, {
  title: 'Full Stack Software Developer',
  company: 'PrivacyHero',
  url: 'https://jobs.github.com/positions/4fdbb7dd-059e-425d-8ec9-10c6b6c700de',
  location: 'Toronto',
  country: 'Canada'
}, {
  title: 'Javascript Frontend Developer',
  company: 'King',
  url: 'https://jobs.github.com/positions/8f7f2eaa-5c7e-45e9-b8d4-4e327aae58f4',
  location: 'Barcelona',
  country: 'Spain'
}, {
  title: 'Lead Front End Developer',
  company: 'Karmarama',
  url: 'https://jobs.github.com/positions/f18153b2-3707-432a-8af0-abeded8f844d',
  location: 'London',
  country: 'United Kingdom'
}, {
  title: 'Senior Software Engineer',
  company: 'BentoBox',
  url: 'https://jobs.github.com/positions/056ce8a5-7520-448a-a0a6-fa954bb6e1f2',
  location: 'New York, NY,',
  country: 'United States'
}, {
  title: 'Head of Back-End Engineering',
  company: 'Axios gets you smarter, faster with news & information that matters.',
  url: 'https://jobs.github.com/positions/277db211-64d8-4ed8-8435-90253b0af00c',
  location: 'Arlington VA, // New York NY',
  country: 'United States'
}, {
  title: 'Lead Engineer (f/m/d)',
  company: 'heycater!',
  url: 'https://jobs.github.com/positions/87374854-6682-496b-beb0-8b26ce9538fa',
  location: 'Berlin',
  country: 'Germany'
}, {
  title: 'Fullstack PHP/JS web developer',
  company: 'VC4A',
  url: 'https://jobs.github.com/positions/dc3b3b32-932f-4601-901e-6bfb7da8fbaa',
  location: 'Amsterdam',
  country: 'Netherlands'
}, {
  title: '.Net Developer (junior)',
  company: 'Motiv ICT Security',
  url: 'https://jobs.github.com/positions/69ead4b5-9c69-426e-92da-5ee00372f557',
  location: 'IJsselstein',
  country: 'Netherlands'
}, {
  title: 'Software Developer, from World to Amsterdam',
  company: 'Reaktor',
  url: 'https://jobs.github.com/positions/ad929e77-d873-4013-95c2-fb6d29b0f8ec',
  location: 'Amsterdam',
  country: 'Netherlands'
}, {
  title: 'Python Developer (m/w/d) mit Ops Hintergrund',
  company: 'resmio GmbH',
  url: 'https://jobs.github.com/positions/143c482e-bd24-484f-9fd6-a90b882dd47a',
  location: 'Nürnberg',
  country: 'Germany'
}, {
  title: 'Lead Software Development Consultant',
  company: 'Stride Consulting',
  url: 'https://jobs.github.com/positions/fa49cee4-61f4-49d1-afa1-543e39481eca',
  location: 'New York',
  country: 'United States'
}, {
  title: 'Software Engineer',
  company: 'BigSpring',
  url: 'https://jobs.github.com/positions/5917943b-d307-4ce1-b1ad-e21244adcb95',
  location: 'New York City',
  country: 'United States'
}, {
  title: 'Python Engineer',
  company: 'Consilience Consulting UK',
  url: 'https://jobs.github.com/positions/f446583f-9245-4493-9db8-07dd2e5b0131',
  location: 'London',
  country: 'United Kingdom'
}, {
  title: 'Senior Full-Stack Node.JS Developer',
  company: 'Beezwax',
  url: 'https://jobs.github.com/positions/923dae86-2400-4731-895a-6f9a5fd35656',
  location: 'Cupertino, CA',
  country: 'United States'
}, {
  title: 'Senior Software Engineer - NEW YORK',
  company: 'JOOR, Inc.',
  url: 'https://jobs.github.com/positions/564569b3-a4b3-460f-a683-14c5669bc9ff',
  location: 'New York',
  country: 'United States'
}, {
  title: 'Agile iOS Developer Otto.de (w/m/divers) | Team Apps',
  company: 'OTTO (GmbH & Co KG)',
  url: 'https://jobs.github.com/positions/2c967b75-c9df-49fe-9221-3aa8288c6d8b',
  location: 'Hamburg, Deutschland',
  country: 'Germany'
}, {
  title: 'Senior Full Stack Engineer',
  company: 'Knotch',
  url: 'https://jobs.github.com/positions/10e61b1c-1d2b-43ed-bf5d-c261020378f1',
  location: 'New York City',
  country: 'United States'
}, {
  title: 'Agile Android Developer (w/m/divers) Android & Kotlin | Team Apps',
  company: 'OTTO (GmbH & Co KG) ',
  url: 'https://jobs.github.com/positions/f1b4a76d-5e00-4ddd-8015-d435612256fa',
  location: 'Hamburg, Deutschland',
  country: 'Germany'
}, {
  title: 'Full Stack Developer (w/m/divers) Fokus Frontend | Inhouse Startup OTTO NOW ',
  company: 'OTTO (GmbH & Co KG)',
  url: 'https://jobs.github.com/positions/3299b71e-0c21-4bec-9c04-0d74c9db6331',
  location: 'Hamburg, Deutschland',
  country: 'Germany'
}, {
  title: 'Lead Software Developer (Full Stack)',
  company: 'Table XI',
  url: 'https://jobs.github.com/positions/c44098fb-4d61-43e6-8208-0285c8894e09',
  location: 'Chicago, IL',
  country: 'United States'
}, {
  title: 'Senior Software Engineer',
  company: 'Orbis Technologies, Inc.',
  url: 'https://jobs.github.com/positions/d954072d-e37a-4bbe-a5db-6bead5520465',
  location: 'Annapolis, MD',
  country: 'United States'
}, {
  title: 'Senior Fullstack Developer (m/w)',
  company: 'the prosperity company AG',
  url: 'https://jobs.github.com/positions/c802a30d-ef59-4f24-bb5b-83341290cf6a',
  location: 'Berlin',
  country: 'Germany'
}, {
  title: 'Cloud Architect - Capital Markets / NYC ',
  company: 'Avanade',
  url: 'https://jobs.github.com/positions/c1904eb6-2c4f-4ad2-b572-80851318c8bb',
  location: 'New York, NY',
  country: 'United States'
}, {
  title: 'Full Stack Java Developer',
  company: 'Avanade',
  url: 'https://jobs.github.com/positions/c56a0f38-a2f1-44ef-84e3-29ed8e2f7c3e',
  location: 'Seattle, WA',
  country: 'United States'
}, {
  title: 'Senior JavaScript Developer',
  company: 'Freeosk',
  url: 'https://jobs.github.com/positions/c1c41558-26e3-48ba-ab50-df28c028f692',
  location: 'Chicago, IL',
  country: 'United States'
}, {
  title: 'Front End Engineer',
  company: 'Novel Effect',
  url: 'https://jobs.github.com/positions/2b8f6b64-be09-425e-8028-e1393f7cfe7f',
  location: 'Seattle',
  country: 'United States'
}
  ]

  module.exports = {
    countries, 
    jobs
  }

  