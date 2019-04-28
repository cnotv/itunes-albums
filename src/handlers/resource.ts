import axios from 'axios';

export default {
  url: 'https://itunes.apple.com/us/rss/topalbums/limit=100/json',

  /**
   * Fetch the albums
   */
  fetchData() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(this.url);
        resolve(response.data.feed);
      } catch (error) {
        reject(error);
      }
    });
  },
};
