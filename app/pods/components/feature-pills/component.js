import Ember from 'ember';
export default Ember.Component.extend({
	classNames : ['panel'],
	classNameBindings : ['panel-success:panel-success' , 'panel-danger:panel-danger'],
	'panel-success' : Ember.computed('modeState',function(){
		return this.get('modeState');
	}),
	'panel-danger' : Ember.computed('modeState',function(){
		return !this.get('modeState');
	}),
	actions:{
		changeMode(){
			this.get('changeMode')(this.get('modeName'));
		}
	}
});
