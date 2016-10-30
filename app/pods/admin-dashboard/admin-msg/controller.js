import Ember from 'ember';
export default Ember.Controller.extend({
	isShowingEditModal : false,
	isShowingMessageModal : false,
	actions:{
		delete(message){
			if(confirm('Permanently delete message ? ')){
				this.get('content.adminMessages').removeObject(message);
				this.notifications.success('Message Deleted', {
					autoClear: true,
					clearDuration: 1200
				});
			}
		},
		add(newMessage){
			this.get('content.adminMessages').pushObject(newMessage);
			this.toggleProperty('isShowingMessageModal');
			this.notifications.success('Message Saved', {
				autoClear: true,
				clearDuration: 1200
			});
		},
		toggleModal(){
			this.toggleProperty('isShowingMessageModal');
		},
		edit(editMessage){
			this.setProperties({
				'editMessage.publishDate' : editMessage.publishDate,
				'editMessage.expiryDate' : editMessage.expiryDate,
				'editMessage.message' : editMessage.message,
				'editMessage.type' : editMessage.type
			});
			this.notifications.info('Message Edited', {
				autoClear: true,
				clearDuration: 1200
			});
			this.toggleProperty('isShowingEditModal');
		},
		toggleEditModal(editMessage){
			this.set('editMessage' , editMessage);
			this.toggleProperty('isShowingEditModal');
		}
	}
});
