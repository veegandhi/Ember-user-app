import Ember from 'ember';
import Component from 'ember-modal-dialog/components/modal-dialog';
export default Ember.Component.extend({
	translucentOverlay: true,
	actions:{
		toggleModal(){
			this.sendAction('toggleModal');
		}
	}
});
