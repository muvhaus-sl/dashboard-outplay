import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel() {
    	this.transitionTo('/dashboard/revenue/salesGenre');
  	}
});
