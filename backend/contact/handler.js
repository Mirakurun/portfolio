const AWS = require('aws-sdk');
const axios = require('axios');
const { config, headers } = require('./config/config');

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

module.exports.email = async event => {
  console.log('Parsing body...');
  const body = JSON.parse(event.body);
  console.log('Parsed body:');
  console.log(JSON.stringify(body));

  try {
    console.log('Sending POST request to Google API...');
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${body.token}`
    );

    if (response.data.success) {
      console.log('reCAPTCHA verified!');

      console.log('Constructing email message...');
      const message = {
        Destination: {
          ToAddresses: [config.to],
        },
        Message: {
          Body: { Text: { Data: body.message, Charset: 'UTF-8' } },
          Subject: { Data: body.subject, Charset: 'UTF-8' },
        },
        Source: config.from,
        ReplyToAddresses: [`${body.name} <${body.email}>`],
      };
      console.log('Constructed email:');
      console.log(JSON.stringify(message));

      console.log('Sending email...');
      const data = await ses.sendEmail(message).promise();

      console.log(JSON.stringify(data));

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: 'Thank you for your message.',
          success: true,
        }),
      };
    }
    console.log(JSON.stringify(response.data));

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        message: 'reCAPTCHA unverified',
        success: false,
      }),
    };
  } catch (error) {
    console.error(error);
    throw new Error('Internal server error');
  }
};
