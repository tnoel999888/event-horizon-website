# Event Horizon Website

## Client
The front-end React app with pages:
- Home
- Music
- News
- Contact

## Server
The backend Nodejs email/Instagram API server for my Event Horizon website.

A `config.js` file is required with email login credentials:
```
module.exports = {
  USER: 'insert_username_here',
  PASS: 'insert_password_here'
}
```

A `.env` file is required with the Instagram access token:
```
INSTAGRAM_ACCESS_TOKEN=insert_token_here
```