// const mongodb = require('mongodb');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { DATABASE_URI, DATABASE_NAME } = process.env;

mongoose.connect(`${DATABASE_URI}/${DATABASE_NAME}?retryWrites=true`, {});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: (email) => {
      const isValid = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
      if (!isValid) {
        throw new Error('The user email is invalid');
      }
    },
  },
  age: {
    type: Number,
  },
});

const Task = mongoose.model('Task', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

// const me = new User({
//   name: 'Rafael Pelle 2',
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
