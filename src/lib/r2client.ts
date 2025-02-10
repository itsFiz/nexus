
import AWS from 'aws-sdk';

const r2Client = new AWS.S3({
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT, // Use the endpoint from the environment variable
  accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID, // Use the Access Key ID from the environment variable
  secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY, // Use the Secret Access Key from the environment variable
  region: 'auto', // R2 uses 'auto' for the region
  signatureVersion: 'v4',
});

export default r2Client;
