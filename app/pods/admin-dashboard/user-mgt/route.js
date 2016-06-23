import Ember from 'ember';
export default Ember.Route.extend({
	afterModel(){
		this.transitionTo('admin-dashboard.user-mgt.features');
	}
});
