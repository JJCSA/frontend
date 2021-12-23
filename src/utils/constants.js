export const userTypes = {
  USER: 'User',
  ADMIN: 'Admin',
};

export const userStatus = {
  APPROVED: 'Approved',
  PENDING: 'Pending',
  REJECTED: 'Rejected',
};

export const formStatus = {
  ACTIVE: 'Active',
  CLOSED: 'Closed',
};

export const apiRootURL = 'http://localhost:3000';
export const apiRootURLForms = 'http://localhost:4000';

export const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

export const prod = {
  url: {
<<<<<<< HEAD
    KEYCLOAK_BASE_URL: 'http://backend.jjcsausa.com:8080',
    API_BASE_URL: 'http://backend.jjcsausa.com:9080/api',
=======
    KEYCLOAK_BASE_URL: 'http://backend.stage.jjcsausa.com:8080',
    API_BASE_URL: 'http://backend.stage.jjcsausa.com:9080/api',
>>>>>>> 3a27472e328e7382dc762f2580f690ab5bae4e84
  },
};

export const dev = {
  url: {
<<<<<<< HEAD
    KEYCLOAK_BASE_URL: 'http://backend.jjcsausa.com:8080',
    API_BASE_URL: 'http://backend.jjcsausa.com:9080/api',
=======
    KEYCLOAK_BASE_URL: 'http://keycloak:8080',
    API_BASE_URL: 'http://localhost:9080/api',
>>>>>>> 3a27472e328e7382dc762f2580f690ab5bae4e84
  },
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
