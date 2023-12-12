Template.afTrix.created = function () {
  this.randomId = Math.random().toString(36).substring(2, 15);
};

Template.afTrix.helpers({
  randomId: function() {
    return Template.instance().randomId;
  },
  initialValue: function () {
    return Template.instance().data.value;
  }
});