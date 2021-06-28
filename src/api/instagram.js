const { hostname } = window.location;
const { protocol } = window.location;
const apiPort = "3002";

async function fetchInstaFeed() {
  return fetch(`${protocol}//${hostname}:${apiPort}/api/instagram`)
    .then((res) => res.text());
}

export default fetchInstaFeed;
