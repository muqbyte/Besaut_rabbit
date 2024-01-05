## Deployment Steps
```
$ node index.js
```
# List of endpoints
recent station data: https://xxx/ranch/now/:sid
recent station signal data: http://xxx/ranch/signal/data
lastseen all data: http://xxx/ranch/lastseen/data

## Build Setup

```
bash
# Start New nodejs
$ npm init -y

# install dependencies
$ npm install axios bcrypt cors express jsonwebtoken m
ysql passport passport-jwt passport-local

# serve with hot reload at localhost:7500
$ node index.js
```

# dockerize nuxt-apps
```
$ docker build . -t aneh2killa/rabbito-backend
```
# to push the apps to dockerhub
```
$ docker push aneh2killa/rabbito-backend
```
# to run on docker
```
$ docker run -it -p 7500:7500 aneh2killa/rabbito-backend
```
# Reset the node Modules
```
$ rm -rf node_modules
$ rm package-lock.json
$ npm install
```