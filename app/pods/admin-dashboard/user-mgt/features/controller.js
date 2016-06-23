import Ember from 'ember';
export default Ember.Controller.extend({
	actions:{
		changeMode(property){
			this.toggleProperty('model.'+property);
		}
	}
});
