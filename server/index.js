const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const fetch = require("node-fetch");
const port = process.env.PORT || 3002;
const path = require('path');
const e = require('express');

require("dotenv").config();

const transport = {
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
};

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/api/send-email', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `Name: ${name} \n\nEmail: ${email} \n\nMessage: ${message}`;

  const mail = {
    from: name,
    to: 'eventhorizonmusic@outlook.com',
    subject: 'Event Horizon Website Email',
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
});

router.get('/api/instagram/:after?', async (req, res) => {
  const { after } = req.params;
  const afterQuery = after ? `&after=${after}` : '';
  try {
    const response = await fetch(`https://graph.instagram.com/me/media?limit=24&fields=id,caption,permalink,media_type,media_url,thumbnail_url&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}${afterQuery}`)
    const responseText = await response.text();
    return res.json({
      success: true,
      json: responseText,
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    })
  }
})

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log('Server running on port: ', port);
});
