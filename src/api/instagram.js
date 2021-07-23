const { hostname } = window.location;
const { protocol } = window.location;
const apiPort = "3002";

async function fetchInstaFeed(afterQueryParam) {
  return fetch(`${protocol}//${hostname}:${apiPort}/api/instagram/${afterQueryParam}`)
    .then((res) => res.text());
}

export default fetchInstaFeed;
