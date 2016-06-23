import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
	    willTransition(transition) {
	      if(!this.controller.get('isSaved')){
	      	if(!confirm('You have unsaved data. Are you sure you want to exit ? ')){
	      		transition.abort();
	      	}
	      }
	    }
	}
});



