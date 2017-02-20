import Ember from 'ember';

export default Ember.Route.extend({
	dataQuery: Ember.inject.service(),
	model() {
    	return Ember.RSVP.hash({
      		revenueByGenreYear:this.get('dataQuery').revenueByGenreYear(),
      		revenueByGenreYearObject:this.get('dataQuery').revenueByGenreYear(false),
    	});
  	},	
});
