import Ember from 'ember';
import EmberValidations from 'ember-validations';


export default Ember.Controller.extend(EmberValidations,{       
  isReadOnly: true,
  viewMode : true,  
	sameAddress : false,   
  originalValues : {
    firstName: 'Test',
    lastName : 'User',
    email : 'test@user.com',
    address:  '1 Elizabeth Street,Melbourne,Vic 3000',
    baddress : ''   
  },
  myObserver1 : Ember.observer('model.firstName','model.lastName','model.email','model.address','model.baddress', function(test,value) {
    let model = JSON.stringify(this.get('model'));
    let original = JSON.stringify(this.get('originalValues'));
    this.set('viewMode', model === original ? true : false);      
  }), 
  myObserver: Ember.observer('sameAddress',function(){
  	if(this.get('sameAddress')){      
  		this.set('model.baddress',this.get('model.address'));           
  	}
  }), 
  //Model Validations
  validations : {    
    'model.firstName' : {      
      length: { minimum: 5 , messages: { tooShort: 'First Name should be minimum 5 characters'}}      
    },
    'model.lastName' : {         
      length: { minimum: 5 , messages: { tooShort: 'Last Name should be minimum 5 characters'}},
    }
  },  
 	actions:{
 		checkAddress(){   			
 			var baddress = this.get('model.baddress');
 			var address = this.get('model.address');
 			if(address != baddress){
 				this.set('sameAddress',false);
 			}else{
 				this.set('sameAddress',true);
 			}
	  },
    changeMode(){      
      var mode = this.get('viewMode'); 
      if(mode){        
        this.notifications.warning('Edit Mode', {
          autoClear: true,
          clearDuration: 800
        });   
        this.toggleProperty('viewMode');
      }
    },
    saveRecord(){
      this.set('errorMessageContainer' , []);
      this.set('errorWarnings' , []);
      this.set('successMessageContainer' , []);
      this.validate().then(()=>{        
        this.set('originalValues',JSON.parse(JSON.stringify(this.get('model')))) 
        this.toggleProperty('viewMode');
        this.successMessageContainer.pushObject('Details updated'); 
        setTimeout(()=>
          { 
            this.set('successMessageContainer' , []); 
          }, 2000);   
      }).catch(()=>{          
          var errors = this.get("errors.model");
          var self = this;               
          Object.keys(errors).forEach(function(key){
            var obj = errors[key];                
            for (var prop in obj) {
              // skip loop if the property is from prototype
              if(!obj.hasOwnProperty(prop)) continue;
              //debugger;    
              self.set('errorWarnings.'+key,true)
              self.errorMessageContainer.pushObject(obj[prop]);
            }
          })        
      });
    }
  }   
});
