import { hostname, protocol, apiPort } from "./consts";

async function fetchInstaFeed(afterQueryParam) {
  return fetch(`${protocol}//${hostname}:${apiPort}/api/instagram/${afterQueryParam}`)
    .then((res) => res.text());
}

export default fetchInstaFeed;
