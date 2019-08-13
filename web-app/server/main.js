import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';
import Admin from '/imports/api/admin';

function updateAdminLogin(username,password) {
  Admin.insert({ username, password });
}


function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  if (Admin.find().count() === 0) {
   
    updateAdminLogin('Eden','123456');
  } else {
    console.log(Admin.find().fetch())
  }

});


