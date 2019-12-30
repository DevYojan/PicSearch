import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 435dc322230154251b65ba1da1d14c123fb8d76545ed86a2b408e7153531f9a6'
  }
});