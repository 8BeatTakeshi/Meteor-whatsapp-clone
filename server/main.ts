import { Meteor } from 'meteor/meteor';

import { createDummyUsers } from '../imports/api/helpers';
import { dummyUsers } from '../imports/api/users';

Meteor.startup(() => {
  console.log('server started !');

  const numberOfUsers: number = Meteor.users.find().count();

  // Create fake users
  if (numberOfUsers === 0) {
    console.log('There are no users');
    createDummyUsers(dummyUsers);
  } else {
    console.log(`There are ${numberOfUsers} users`);
  }
});
