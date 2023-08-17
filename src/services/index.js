import getRequest from '../utils/getRequest';

export const API_URI = process.env.REACT_APP_API_URI;
export const API_KEY = process.env.API_KEY || 'f825344b0cf0672c689378549f9868db';

export const getWeatherByCityName = (city = '') => {
  const request = getRequest();

  return fetch(`${API_URI}/weather?q=${city}&appid=${API_KEY}&units=metric`, request).then((res) => res.json());
};
