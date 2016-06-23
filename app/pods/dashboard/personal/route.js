import Ember from 'ember';

export default Ember.Route.extend({	

	model: function (params) {
        return Ember.Object.create({
			firstName: 'Test',
			lastName : 'User',
			email : 'test@user.com',
			address:  '1 Elizabeth Street,Melbourne,Vic 3000',
			baddress : '',				
        });
    },
    setupController(controller,model){
    	controller.set('original',JSON.parse(JSON.stringify(model)))
    	controller.set('model',model)
    },
	actions:{
	    willTransition(transition) {
	      if(!this.controller.get('viewMode')){
	      	if(!confirm('You may lose unsaved data. Are you sure you want to exit ? ')){
	      		transition.abort();
	      	}else{
		      	this.controller.set('viewMode',true);	      	
		    }	
	      }
	    }
	}
	
});
