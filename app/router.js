import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', function() {
    this.route('personal');
    this.route('payment', function() {
      this.route('credit-card');      
      this.route('direct-debit');
    });
    this.route('manage-users', function() {
      this.route('profile', { path: 'profile/:id' });
      this.route('new-user');
    });

  });
  this.route('admin-dashboard', function() {
    this.route('user-mgt', function() {
      this.route('feature',{path: 'feature/:id'});
      this.route('permissions');
      this.route('features');
      this.route('usage');
    });
    this.route('admin-msg');
    this.route('user-history');
  });
  
});

export default Router;
