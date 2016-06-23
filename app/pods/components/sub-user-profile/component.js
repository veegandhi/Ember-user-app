import Ember from 'ember';
export default Ember.Component.extend({
	init:function(){
		var	newRecord = {
			id : Math.floor((Math.random() * 1000000)),
			name : '',
			read : false,
			write : false,
			lastLogin : '',
			loginTotal : ''
		};
		this._super();
		this.set('newRecord' , newRecord);
	},
	actions:{
		saveRecord(){
			this.get('saveRecord')(this.get('newRecord'));
		},
		editRecord(){
			this.notifications.warning("Edit Mode", {
				autoClear: true,
				clearDuration: 800
			});
			this.set('title','Edit Profile');
			this.toggleProperty('isEdit');
		},
		saveEdit(){
			this.notifications.success("User Updated", {
				autoClear: true,
				clearDuration: 800
			});
			this.set('title','User Profile');
			this.toggleProperty('isEdit');
		}
	}
});
