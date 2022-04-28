export const userTypes = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN',
};

export const userStatus = {
  ACTIVE: 'Active',
  PENDING: 'Pending',
  REJECTED: 'Rejected',
  NEWUSER: 'NewUser',
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
    KEYCLOAK_BASE_URL: 'http://backend.stage.jjcsausa.com:8080',
    API_BASE_URL: 'http://backend.stage.jjcsausa.com:9080/api',
  },
};

export const dev = {
  url: {
    KEYCLOAK_BASE_URL: 'http://keycloak:8080',
    API_BASE_URL: 'http://localhost:9080/api',
  },
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
