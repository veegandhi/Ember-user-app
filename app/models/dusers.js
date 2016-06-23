import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';


export default Model.extend({
  uname: attr('string'),
  reports: attr('boolean',{defaultValue: false}),
  step: attr('boolean' ,{defaultValue: false}),
  billing: attr('boolean' ,{defaultValue: false}),
  feature4: attr('boolean' ,{defaultValue: false}),
  feature5: attr('boolean' ,{defaultValue: false}),
  createRemoveAcc : attr('boolean' ,{defaultValue: false}),
  enableDisableAcc : attr('boolean' ,{defaultValue: false}),
});
