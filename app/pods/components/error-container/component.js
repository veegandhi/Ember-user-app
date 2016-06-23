import Ember from 'ember';
export default Ember.Component.extend({
	classNames: ['alert'],
	classNameBindings : ['alert-danger:alert-danger','alert-success:alert-success']
});
