// export const getAPIBaseURL = () => {
//   if (__DEV__) {
//     return 'https://api.thedogapi.com/v1';
//   } else {
//     // TODO: Set proper baseURL for production
//     return '';
//   }
// };

export const getAPIBaseURL = () => {
  if (__DEV__) {
    return 'https://stg-backoffice.multitudehealth.com';
  } else {
    // TODO: Set proper baseURL for production
    return 'https://stg-backoffice.multitudehealth.com';
  }
};
