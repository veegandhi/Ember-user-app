import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-input', 'Integration | Component | form input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form-input}}
      template block text
    {{/form-input}}
  `);

  assert.equal(this.$().text().trim(), 'Name on Card Card Number Expiry Month MonthJan(01)Feb(02)Mar(03)Apr(04)May(05)June(06)July(07)Aug(08)Sep(09)Oct(10)Nov(11)Dec(12)ExpiryYear20162017201820192020202120222023CVV');
});
