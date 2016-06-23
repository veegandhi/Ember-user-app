import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

export default DS.Model.extend({
  isCreditCard: attr('boolean'),
  isDirectDebit: attr('boolean'),
  CCname: attr('string'),
  CCnum :attr('string'),
  CCexpiryMM:attr('string'),
  CCexpiryYY:attr('string'),
  CCcvv:attr('string'),
  DDaccBSB :attr('string'),
  DDaccNo:attr('string'),
  DDaccName:attr('string')
});