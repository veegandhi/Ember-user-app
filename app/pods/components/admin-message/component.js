import Ember from 'ember';
import Component from 'ember-modal-dialog/components/modal-dialog';
export default Ember.Component.extend({
	init : function(){
		this._super();
		if(this.get('editMessage')){
			var editMessage = JSON.parse(JSON.stringify(this.get('editMessage')));
			this.set('newMessage' , editMessage);
			this.set('newMessage.expiryDate' , moment(editMessage.expiryDate,'DD-MM-YYYY hh:mm A'));
			this.set('newMessage.publishDate' , moment(editMessage.publishDate,'DD-MM-YYYY hh:mm A'));
			this.set('startDate' , moment(editMessage.expiryDate));
		}else{
			var newMessage = {
				type : 'success',
				publishDate : moment(),
				expiryDate : moment(),
				message : ''
			};
			this.set('newMessage' , newMessage);
			this.set('startDate' , moment());
		}
		this.set('errorContainer' , []);
		this.set('errorClass' , 'form-group');
	},
	translucentOverlay: true,
	actions:{
		toggleModal(){
			this.sendAction('toggleModal');
		},
		clickOutside(){
			return false;
		},
		setType(type){
			this.set('newMessage.type',type);
		},
		test(date){
			console.log(date);
		},
		save(newMessage){
			if(newMessage.message ==''){
				this.errorContainer.pushObject('Message cannot be empty');
				this.set('errorClass' , 'form-group has-error');
				setTimeout(()=>
				{
					this.set('errorContainer' , []);
				}, 2000);
			}
			else
			{
				console.log(newMessage);
				this.set('newMessage.expiryDate',moment(newMessage.expiryDate).format('DD-MM-YYYY hh:mm A'));
				this.set('newMessage.publishDate',moment(newMessage.publishDate).format('DD-MM-YYYY hh:mm A'));
				this.get('add')(newMessage);
			}
		}
	}
});
