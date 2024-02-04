const users = [
  {
    id: '46346dd5-848e-40ba-997d-4b68a53b44b9',
    name: 'alexander',
    email: 'hi@alexanderpuchta.de',
    password: 'some-strong-password'
  }
]

const education = [
  {
    id: 'd9563b94-fd0a-419b-a646-7d373aaa8765',
    title: 'high school diploma',
    school: 'Berufliche Oberschule Hof',
    location: 'Schloßplatz 6, 95028 Hof'
  },
  {
    id: 'f2b12762-ceb0-4c8f-9556-0ad42a839752',
    title: `bachelor's degree`,
    school: 'Hof University of Applied Sciences',
    location: 'Alfons-Goppel-Platz 1, 95028 Hof'
  },
]

const jobs = [
  {
    id: '276067ca-dca6-413a-a581-59d19bc838db',
    name: 'Appsfactory GmbH',
    title: 'internship iOS developer',
    description: `finishing bachelor's degree. live tracking via realm cloud.`,
    skills: [
      "swiftui",
      "uikit",
      "swift",
      "realm cloud",
      "combine",
      "async/await",
      "JIRA",
      "confluence",
      "Figma",
      "git"
    ],
    projects: [
      "mobility",
      "tourism",
    ],
    start: '2020-09-29',
    end: '2021-02-14'
  },
  {
    id: 'c79513df-d833-424b-9818-baeca79c667e',
    name: 'Appsfactory GmbH',
    title: 'iOS developer',
    description: `working on various projects together with all dev stacks, e.g. android, designers, projectmanagers, etc.`,
    skills: [
      "swiftui",
      "uikit",
      "swift",
      "apple maps",
      "google maps",
      "stripe",
      "realm cloud",
      "combine",
      "async/await",
      "JIRA",
      "confluence",
      "Figma",
      "git"
    ],
    projects: [
      "mobility",
      "emobility",
      "energy",
      "tourism"
    ],
    start: '2021-02-15',
    end: '2023-12-01'
  },
  {
    id: 'fe7233b8-a75b-42c8-a71f-09eea52a7607',
    name: 'Aktion Mensch e.V.',
    title: 'iOS developer',
    description: 'developing the lottery app.',
    skills: [
      "swiftui",
      "uikit",
      "swift",
      "combine",
      "async/await",
      "JIRA",
      "confluence",
      "Figma",
      "git"
    ],
    projects: [
      "lottery"
    ],
    start: '2023-12-01',
    end: null
  }
]


module.exports = {
  users,
  education,
  jobs
};
