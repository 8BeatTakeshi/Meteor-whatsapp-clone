import { Meteor } from 'meteor/meteor';

import { createDummyUsers } from '../imports/api/helpers';
import { dummyUsers } from '../imports/api/users';

Meteor.startup(() => {
  console.log('server started !');

  const numberOfUsers: number = Meteor.users.find().count();

  // Create fake users
  if (numberOfUsers === 0) {
    console.log("Il n'y a pas d'utilisateurs");
    createDummyUsers(dummyUsers);
  } else {
    console.log(`Il y a ${numberOfUsers} utilisateurs`);
  }
});
