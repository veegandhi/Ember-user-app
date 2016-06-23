import Ember from 'ember';

export default Ember.Controller.extend({
	isSaved : false,
	actions : {	
		addRecord(data){
			if(!data){return false;}
			var self = this;
			var record = data;			
			var store = this.store;
			var newRecord = store.createRecord('user',record);
			newRecord.save().then((response)=>{				
				this.set('isSaved',true);
				this.notifications.success('New User Created successfully!', {
				  autoClear: true
				});
				this.transitionToRoute('dashboard.manage-users.profile',response.id);
			});
		}
	}	
});
