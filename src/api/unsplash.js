import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 152077d420e661683a187f89c2f8b980f13c37f6c9f0704366b1d46421035912'
  }
});