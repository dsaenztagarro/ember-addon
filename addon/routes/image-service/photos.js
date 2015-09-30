import Ember from 'ember';
import BaseRoute from 'ember-image-service/routes/base';

export default BaseRoute.extend({
  photosService: Ember.inject.service('image-service.photos'),
  model() {
		var photos = this.get('photosService').fetchAll(); /* the list of photos */
    var context = { photos: photos };
    return context;
  },

  afterModel(model) {
    var photos = model.photos;
		this._transitionToPhoto(photos[0]);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('photos', model.photos);
  },

	_transitionToPhoto(photo) {
    if (photo) {
      this.get('cacheService').add('photo', photo);
      this.client().transitionTo('photo', photo.id);
    }
	}
});
