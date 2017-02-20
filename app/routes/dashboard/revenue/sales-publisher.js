import Ember from 'ember';

export default Ember.Route.extend({
	dataQuery: Ember.inject.service(),
	model() {
    	return Ember.RSVP.hash({
      		revenueByPublisher:this.get('dataQuery').revenueByPublisher(),
      		revenueByPublisherCumulative:this.get('dataQuery').revenueByPublisher(true),
      		
    	});
  	},	
});
