import Ember from 'ember';
export default Ember.Component.extend({
	classNames : ['form-group'],
	classNameBindings : ['has-error:has-error']
});
