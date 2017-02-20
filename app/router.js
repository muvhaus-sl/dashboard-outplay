import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about', { path: '/' });
  this.route('dashboard', function() {
    this.route('revenue', function() {
      this.route('salesGenre');
      this.route('salesPublisher');
    });
    this.route('overview');
    this.route('geo', function() {
      this.route('revenue');
      this.route('platformPopularity');
      this.route('genrePopularity');
    });
  });
  this.route('login');
});

export default Router;
