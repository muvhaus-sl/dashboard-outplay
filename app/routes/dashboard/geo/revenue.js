import Ember from 'ember';

export default Ember.Route.extend({
	dataQuery: Ember.inject.service(),
	model() {
    	return Ember.RSVP.hash({
      		revenueByRegion:this.get('dataQuery').revenueByRegion(),

    	});
  	},	
});
