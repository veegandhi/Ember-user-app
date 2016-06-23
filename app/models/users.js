import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

export default DS.Model.extend({
  name: attr('string'),
  read: attr('boolean'),
  write: attr('boolean'),
  lastLogin :attr('string'),
  loginTotal:attr('string')
});
