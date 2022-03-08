const getRandomNumber = () => {
  return Math.round(Math.random() * (10 - 1) + 1);
};

const useGetImages = () => {
  const makeUrl = () => {
    let url = new URL('https://api.pexels.com/v1/search');

    url.search = new URLSearchParams({
      query: 'nature',
      orientation: 'square',
      size: 'small',
      per_page: 2,
      page: getRandomNumber(),
    });

    return url;
  };

  fetch(makeUrl(), {
    headers: {
      Authorization: process.env.REACT_APP_AUTH_KEY,
    },
  });
};

export default useGetImages;
