export const projects = [
  {
    id: 7,
    name: 'UniChat',
    description: "A real-time chat and tutoring application to be used by UCalgary Engineering students.",
    image: 'unichat.png',
    stack: {
      front: ['React', 'TypeScript', 'Material UI'],
      back: ['Node.js', 'Express', 'PostgreSQL', 'Socket IO'],
      deployment: [],
      test: ['Cypress'],
      other: []
    },
    date: 'NOV/DEC 2020',
    url: 'https://github.com/shadeemerhi/unichat'
  },
  {
    id: 1,
    name: 'Simplifix',
    description: "A full-stack application where users can find and hire freelance contractors for labor-based work by browsing through posted 'gigs' as well as post their own gigs if they possess skills in a particular area. The platform manages all bookings and payments, and allows for live messaging between clients and contractors.",
    image: 'simplifix.png',
    stack: {
      front: ['React', 'Material UI'],
      back: ['Node.js', 'Express', 'PostgreSQL'],
      deployment: ['Netlify', 'Heroku'],
      test: ['Cypress'],
      other: ['Socket.io', 'Axios', 'Stripe API', 'Google Maps API', 'Adobe XD']
    },
    date: 'NOV/DEC 2020',
    url: 'https://github.com/shadeemerhi/simplifix'
  },
  {
    id: 2,
    name: 'Scheduler',
    description: 'A full-stack application that allows users to book and cancel interviews with an interviewer of their choice. A concise API together with a WebSocket server enables users to have a real-time experience.',
    image: 'scheduler.png',
    stack: {
      front: ['React', 'SASS', 'Axios'],
      back: ['Node.js', 'Express', 'PostgreSQL'],
      deployment: ['Netlify', 'Heroku'],
      test: ['Jest', 'Storybook', 'Cypress'],
      other: ['WebSockets','Axios']
    },
    date: 'OCT/NOV 2020',
    url: 'https://github.com/shadeemerhi/scheduler'
  },
  {
    id: 3,
    name: 'Foodood',
    description: 'A full-stack intermediary food ordering app that utilizes the Twilio SMS API to allow for real-time text message order updates for both the customer and the restaurant.',
    image: 'foodood.png',
    stack: {
      front: ['JavaScript', 'jQuery', 'SASS', 'HTML5', 'Bootstrap'],
      back: ['Node.js', 'Express', 'PostgreSQL'],
      deployment: [],
      test: [],
      other: ['Twilio SMS API', 'Adobe XD']
    },
    date: 'OCT 2020',
    url: 'https://github.com/shadeemerhi/foodood'
  },
  {
    id: 4,
    name: 'Jungle',
    description: 'A full-stack e-commerce store built using Ruby on Rails. This project was built to become confident with the Rails framework and accompanying Ruby testing libraries.',
    image: 'jungle.png',
    stack: {
      front: ['Ruby', 'ERB', 'SASS', 'Bootstrap'],
      back: ['Ruby on Rails', 'PostgreSQL'],
      deployment: [],
      test: ['RSpec', 'Capybara', 'Poltergeist'],
      other: ['Stripe API']
    },
    date: 'NOV 2020',
    url: 'https://github.com/shadeemerhi/jungle'
  },
  {
    id: 5,
    name: 'Tweeter',
    description: 'A simplified Twitter clone. This project was primarily built to become proficient with front-end development.',
    image: 'tweeter.png',
    stack: {
      front: ['JavaScript', 'jQuery', 'Ajax', 'CSS', 'HTML5', 'Bootstrap'],
      back: ['Node.js', 'Express'],
      deployment: [],
      test: [],
      other: []
    },
    date: 'OCT 2020',
    url: 'https://github.com/shadeemerhi/tweeter'
  },
  {
    id: 6,
    name: 'TinyApp',
    description: 'A full-stack application that allows users to shorten long URLs; a bit.ly clone. The main focus of this project was to become experienced with back-end development using Node.js and Express.',
    image: 'tinyapp.png',
    stack: {
      front: ['JavaScript', 'jQuery', 'Ajax', 'CSS', 'HTML5', 'Bootstrap'],
      back: ['Node.js', 'Express'],
      deployment: [],
      test: [],
      other: []
    },
    date: 'SEP/OCT 2020',
    url: 'https://github.com/shadeemerhi/tinyapp'
  },
]