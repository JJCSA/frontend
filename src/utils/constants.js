export const userTypes = {
  USER: 'User',
  ADMIN: 'Admin',
  SUPERADMIN: 'SUPER_ADMIN',
};

export const DashboardUserStatus = {
  APPROVED: 'Approved',
  PENDING: 'Pending',
  REJECTED: 'Rejected',
  ACTIVE: 'Active',
};

export const userStatus = {
  NEWUSER: 'NewUser',
  PENDING: 'Pending',
  REJECTED: 'Rejected',
  ACTIVE: 'Active',
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

export const production = {
  url: {
    KEYCLOAK_BASE_URL: 'https://www.jjcusa.org:8080',
    API_BASE_URL: 'https://www.jjcusa.org:9080/api',
  },
};

export const development = {
  url: {
    KEYCLOAK_BASE_URL: 'https://backend.stage.jjcusa.org:8080',
    API_BASE_URL: 'https://backend.stage.jjcusa.org:9080/api',
  },
};

export const local = {
  url: {
    KEYCLOAK_BASE_URL: 'http://keycloak:8080',
    API_BASE_URL: 'http://localhost:9080/api',
  },
};

export const config = (process.env.REACT_APP_NODE_ENV === 'production') ? production :
                        (process.env.REACT_APP_NODE_ENV === 'development') ? development : local;
