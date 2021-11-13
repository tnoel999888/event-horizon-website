import { hostname, protocol, apiPort } from "./consts";

async function sendEmail(formDetails) {
  return fetch(`${protocol}//${hostname}:${apiPort}/send`, {
    method: "POST",
    body: JSON.stringify(formDetails),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(
    (response) => (response.json()),
  );
}

export default sendEmail;
