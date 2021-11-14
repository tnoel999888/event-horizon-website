async function fetchInstaFeed(afterQueryParam) {
  return fetch(`/api/instagram/${afterQueryParam}`)
    .then((res) => res.text());
}

export default fetchInstaFeed;
