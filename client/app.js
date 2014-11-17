Meteor.subscribe('getComments');

Template.comments.helpers({
  getComments: function() {
    var parent = this._id || null;
    return Comments.find({parent: parent});
  },

  haveChildren: function() {
    return Comments.find({parent: this._id}).count() > 0;
  }
});