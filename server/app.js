Meteor.publish('getComments', function() {
  return Comments.find({});
});