import Ember from 'ember';
export default Ember.Route.extend({
	setupController(controller,model){		
		controller.set('content',JSON.parse(JSON.stringify(model)));
	}	
});
