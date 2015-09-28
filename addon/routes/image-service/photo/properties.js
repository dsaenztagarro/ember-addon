import Ember from 'ember';

export default Ember.Route.extend({
  photosService: Ember.inject.service('image-service.photos'),
});
