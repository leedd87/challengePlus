export const getAPIBaseURL = () => {
  if (__DEV__) {
    return 'https://api.thedogapi.com/v1';
  } else {
    return '';
  }
};

export const getAPINewsURL = () => {
  if (__DEV__) {
    return 'https://newsapi.org';
  } else {
    return '';
  }
};
