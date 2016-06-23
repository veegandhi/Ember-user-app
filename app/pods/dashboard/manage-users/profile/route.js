import Ember from 'ember';

export default Ember.Route.extend({		
	model(data) {			
		return this.store.findRecord('user' , data.id);			
	}	
});
