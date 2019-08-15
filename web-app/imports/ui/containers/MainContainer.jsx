import { createContainer } from 'meteor/react-meteor-data';
import MainPage from '../pages/MainPage.jsx'

export default MainContainer = createContainer(({params}) => {
  const currentUser = Meteor.user();
  console.log(currentUser);
  return {
    currentUser,
  };
}, MainPage);