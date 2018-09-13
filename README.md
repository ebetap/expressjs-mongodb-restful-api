# expressjs-mongodb-restful-api

Build restful api using mongoDB and Express.js

Description
Make sure you've install mongoDb in your machine.

1. running on port 3000
2. database name : 'exmo'

#Setup

1. clone this repository
2. open terminal and go to `expressjs-mongodb-restful-api` directory
3. `npm install` if err try with 'sudo npm install'
4. `npm start`

API docs

1. GET all users data `/users`
2. GET user by id `/user/:id` require id as parameter
3. POST user data `/users` with body `{email:'someemail@gmail.com',password:'somepassword'}`
4. PUT user data `/users/:id` require id as paramer and body `{email:'someemail@gmail.com',password:'somepassword'}`
5. DELETE user data `/users/:id` require id as parameter
