import Ember from 'ember';

export default Ember.Route.extend({	
	model: function (params) {
        return Ember.Object.create({
			id:1,
			isCreditCard : false,
			isDirectDebit : true,
			CCname:  'Test User',
			CCnum : '1234 5678 8901 2345',
			CCexpiryMM: '04',
			CCexpiryYY: '16',
			CCcvv : '337',
			DDaccBSB : '063526',
			DDaccNo: '23565869',
			DDaccName: 'Test User'
        });
    },
    setupController(controller,model){
    	controller.set('original',JSON.parse(JSON.stringify(model)))
    	controller.set('model',model)
    },
	
});
