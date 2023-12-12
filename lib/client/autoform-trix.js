AutoForm.addInputType('trix', {
	template: 'afTrix',
	valueOut: function() {
	  return this.val();
	},
	valueIn: function(value) {
	  return value;
	},
  });