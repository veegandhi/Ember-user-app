import Ember from 'ember';
export default Ember.Route.extend({
	setupController(controller,model){
		var data = [];
		var accounts = model.accounts;
		Object.keys(accounts).forEach(function(key) {
			let accContainer = {};
			let parentAccount = accounts[key];
			accContainer['id'] = parentAccount.id;
			accContainer['text'] = parentAccount.accName;
			accContainer['state'] = {'selected':parentAccount.access ,'opened' : parentAccount.visible};
			accContainer['type'] = 'parent';
			accContainer.children = [];
			Object.keys(parentAccount.subAcc).forEach(function(key) {
				let childAccount = parentAccount.subAcc[key];
				if(childAccount.subAcc)
				{
					childAccount.children = [];
					Object.keys(childAccount.subAcc).forEach(function(key) {
						let grandChildAccount = childAccount.subAcc[key];
						childAccount.children.push({'id': grandChildAccount.accName, 'text' : grandChildAccount.accName , 'state' : {'selected' : grandChildAccount.access , 'opened' : grandChildAccount.visible}});
					});
					accContainer.children.push({'id': childAccount.accName,'type' : 'firstChild', 'text' : childAccount.accName , 'children' :childAccount.children , 'state' : {'selected' : childAccount.access , 'opened' : childAccount.visible}});
				}else{
					accContainer.children.push({'id': childAccount.accName,'type' : 'firstChild', 'text' : childAccount.accName , 'state' : {'selected' : childAccount.access , 'opened' : childAccount.visible}});
				}
			});
			data.push(accContainer);
		});
		controller.set('model' ,model);
		controller.set('data' ,data);
	}
});
