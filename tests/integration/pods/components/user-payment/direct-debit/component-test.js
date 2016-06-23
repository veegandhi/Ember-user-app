import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-payment\direct-debit', 'Integration | Component | user payment\direct debit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{user-payment\direct-debit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#user-payment\direct-debit}}
      template block text
    {{/user-payment\direct-debit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
