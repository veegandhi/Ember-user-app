import Ember from 'ember';

export default Ember.Route.extend({	
	beforeModel(){
		this.transitionTo('dashboard.manage-users.profile',1);
	},
	model(){		
		return this.store.findAll('user');
	}
});
