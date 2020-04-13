const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

export const searchByName = (term) => {
  const URL = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${apiKey}`;

  return Promise.resolve(
    fetch(URL).then(
      response => response.json()
    ).then( gifs => gifs ));
};

export const searchById = (gifId) => {
  const URL = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${apiKey}`;

  return Promise.resolve(
    fetch(URL).then(
      response => response.json()
    ).then(gif => gif));
};
export const getTrending = () => {
  const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;

  return Promise.resolve(
    fetch(URL).then(
      response => response.json()
    ).then(gif => gif));
};