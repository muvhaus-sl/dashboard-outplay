import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
   authenticate: function() {
            var _this = this;
            var credentials = this.getProperties('identification', 'password');
            this.get('session').authenticate('authenticator:custom-graphql-authenticator', credentials).then(null, function(message) {
                _this.set('errorMessage', message);
            });
        }
  }
});