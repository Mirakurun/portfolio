# Contact Form API

Process the contact form on my portfolio webpage

## Requirements

1. Domain name
2. [AWS account](https://aws.amazon.com/)
3. [Unsanboxed Amazon SES account](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html)
4. [Verify your domain](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html)

## Credentials

[AWS credentials for serverless](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

## Install the dependencies

```bash
npm install -g serverless # Node.js >= 6 required.
npm install
```

## Configuration

Create config.js and env.yml in config folder. See example files.

#### `config.js`

```js
exports.config = {
  from: '...', // The email address that is sending the email.
  to: '...', // The recipients to place on the To: line of the message.
};

exports.headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '...',
};
```

#### `env.yml`

```yml
  prod: # Stage
    SECRET_KEY: # Google reCAPTCHA Secret Key
```

## Create package of entire infrastructure

```bash
serverless package
```

## Deployment from a pre-packaged directory

```bash
serverless deploy --package .serverless
```
