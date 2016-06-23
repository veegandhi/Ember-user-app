import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-payment\credit-card', 'Integration | Component | user payment\credit card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{user-payment\credit-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#user-payment\credit-card}}
      template block text
    {{/user-payment\credit-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
