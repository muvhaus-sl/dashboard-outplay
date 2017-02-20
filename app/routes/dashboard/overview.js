import Ember from 'ember';

export default Ember.Route.extend({
	dataQuery: Ember.inject.service(),
  
	model() {
    	return Ember.RSVP.hash({
      		topGamesSales:this.get('dataQuery').topGames(),
      		countriesExpenditure:this.get('dataQuery').countriesExpenditure(),
      		topGenresTitleCount:this.get('dataQuery').topGenresTitleCount(),
      		topPublishers:this.get('dataQuery').topPublishers(),
      		topPublishersTitleCount:this.get('dataQuery').topPublishersTitleCount(),
      		topGenres:this.get('dataQuery').topGenres(),
    	});
  	},	
});
