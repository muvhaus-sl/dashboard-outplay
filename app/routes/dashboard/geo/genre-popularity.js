import Ember from 'ember';

export default Ember.Route.extend({
	dataQuery: Ember.inject.service(),
	model() {
    	return Ember.RSVP.hash({
      		genreRevenueGeo:this.get('dataQuery').genreRevenueGeo(),
      		genreRevenueScatter:this.get('dataQuery').genreRevenueScatter(),
    	});
  	},	
});
