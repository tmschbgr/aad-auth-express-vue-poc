# aad-auth-express-vue-poc
A sample Node Express application using Azure Active Direcectory authentication with a Bearer strategy.
The Vue.js application is using adal-angular to get the authentication token from AAD and securely communicating with the backend.
See matt-ankerson's [vue-adal](https://github.com/matt-ankerson/vue-adal)
for more information regarding the front end part. 

The ExpressJs app is using the [passport-azure-ad](https://github.com/AzureAD/passport-azure-ad) passport strategy.

The purpose of this example is to demonstrate usage of ADAL JS from the `adal-angular` module for managing authentication with Azure AD in the context of a typical Vue.js single page application.

### Dependencies back end
``` JavaScript
"dependencies": {
    "bluebird": "^3.5.1",
    "body-parser": "^1.18.2",
    "cors": "^2.8.4",
    "dotenv": "^5.0.1",
    "express": "^4.16.3",
    "passport": "^0.4.0",
    "passport-azure-ad": "^3.0.12"
},
```

### Dependencies front end
``` JavaScript
"dependencies": {
    "adal-angular": "^1.0.17",
    "axios": "^0.18.0",
    "vue": "^2.5.16",
    "vue-axios": "^2.0.2"
},
```
### Azure configuration:
Please follow the instructions here to set up AAD authentication for your app.
[passport-azure-ad](https://github.com/AzureAD/passport-azure-ad)

### Build and run this sample:
``` Bash
cd './aad-auth-express-vue-poc'

# install dependencies back end
npm install

# add .env file
NAME=DEV
TENANT_NAME=YOUR-TENANT-NAME
CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx

# run back end (requires nodemon)
nodemon server.js

# install dependencies front end
cd public
npm install

# serve with hot reload at localhost:8080
npm run dev
```
