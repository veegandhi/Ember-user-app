import Ember from 'ember';

export default Ember.Controller.extend({
	viewMode : true,
  myObserver1 : Ember.observer(
    'model.CCname',
    'model.CCnum',
    'model.CCexpiryMM',
    'model.CCexpiryYY',
    'model.CCcvv',
    'model.DDaccBSB', 
    'model.DDaccNo', 
    'model.DDaccName', 
    function(test,value) {      
      let model = JSON.stringify(JSON.parse(JSON.stringify(this.get('model'))));
      let original = JSON.stringify(this.get('original'));
      this.set('viewMode', model === original ? true : false);     
  }),
	actions : {
		changeMethod(method){	
			switch (method)
			{
        case "dd" : 					 
          this.set("model.isCreditCard",false);	
          this.set("model.isDirectDebit",true);
          this.notifications.info('Payment Mode Switched to Direct Debit', {
            autoClear: true,
            clearDuration: 800
          })
        break;

        case "cc" : 					
          this.set("model.isCreditCard",true);	
          this.set("model.isDirectDebit",false);          
          this.notifications.info('Payment Mode Switched to Credit Card', {
            autoClear: true,
            clearDuration: 800
          })
          break;

        default : 
          break;
			}
		},
		changeMode(){
      var mode = this.get('viewMode')
      if(mode){
        this.notifications.warning('Edit Mode', {
          autoClear: true,
          clearDuration: 800
        });  
      }else{
        this.notifications.success('Details Updated', {
          autoClear: true,
          clearDuration: 800
        });  
      }
      this.toggleProperty('viewMode')
    }
	}
});
