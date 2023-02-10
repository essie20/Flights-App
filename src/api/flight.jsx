import axios from 'axios';

const access_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMmVjNWZkM2FiMzUxOTdlMDIyZWFmNTU1MjlhNzU4ZWVhNmI5ZDM0MjBiNGFmNzUzN2ZmOTRlMTZkMzNmZGQ1MDg2NGMyNjc2MjBmYjg1YzEiLCJpYXQiOjE2NzUxOTc2NjMsIm5iZiI6MTY3NTE5NzY2MywiZXhwIjoxNzA2NzMzNjYzLCJzdWIiOiIxOTg5OCIsInNjb3BlcyI6W119.ppbcpfOlGr-65pyZz-fgJrFwrsZYIhg2dgIFBTClqY50ChcRssc-9ZfeF-yIVTM0m2Cq2zpqCASrjdV-BvImbQ'

const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://app.goflightlabs.com',
  timeout: 5000
});

export function getDepartures(origin, destination, departureDate, passengers) {
  return instance.get('/search-best-flights', {
      params: {
        access_key: access_key,
        adults: passengers,
        origin: origin,
        destination: destination,
        departureDate: departureDate
      }
    })
    .then(function (response) {
      console.log(response);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}
