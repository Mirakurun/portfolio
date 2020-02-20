exports.config = {
  from: 'Name <sender@domain.com>', // The email address that is sending the email.
  to: 'Name <recipient@email.com>', // The recipients to place on the To: line of the message.
};

exports.headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'https://example.com',
};
