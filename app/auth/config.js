
module.exports.credentials = {
  identityMetadata: `https://login.microsoftonline.com/${process.env.TENANT_NAME}.onmicrosoft.com/.well-known/openid-configuration`, 
  clientID: process.env.CLIENT_ID
};
