import Ember from 'ember';

export default Ember.Controller.extend({
	filterText : '',
	filteredResults: function(){
	    var filter = "*"+this.get('filterText') + "*";
	    this.store.query('user',{name:filter}).then(function(response){	    	
	    	return response;
	    })
  	}.property('filterText'),
  	actions:{
  		deleteUser(userId){
  			let store = this.store;
  			console.log(this.model);

  			this.store.findRecord('user', userId).then(function(user) {			  
			  user.destroyRecord();
			});

  			//store.findRecord('user', userId).then(function(user) {
			//   user.deleteRecord();
			//   user.get('isDeleted'); // => true
			//   user.save(); // => DELETE to /posts/1
			// });
  		}
  	}
});
