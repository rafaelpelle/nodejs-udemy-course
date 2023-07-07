const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { User, Task } = require('./model');

dotenv.config();

const { DATABASE_URI, DATABASE_NAME } = process.env;

mongoose.connect(`${DATABASE_URI}/${DATABASE_NAME}?retryWrites=true`, {});

// const me = new User({
//   name: 'Rafael Pelle 3',
//   email: 'rafapelle@gmail.com',
//   age: 30,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const myTask = new Task({
//   description: 'Create a mongoose model',
//   completed: true,
// });

// myTask
//   .save()
//   .then(() => {
//     console.log(myTask);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
