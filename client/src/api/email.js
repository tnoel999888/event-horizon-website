async function sendEmail(formDetails) {
  return fetch("/send", {
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
