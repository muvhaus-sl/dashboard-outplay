import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),
	displayUserMenu:false,
  	actions: {
	    invalidateSession() {
	      this.get('session').invalidate();
	    },
	    toggleDisplayUserMenu:function(){
			this.toggleProperty('displayUserMenu');
		},
  	},
});