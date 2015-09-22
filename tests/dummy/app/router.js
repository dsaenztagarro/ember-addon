import Ember from 'ember';
import config from './config/environment';
import imageServiceRouter from 'ember-image-service/router';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  imageServiceRouter(this);
});

export default Router;
