import Ember from 'ember';
import BaseRoute from './routes/base';

export default BaseRoute.extend({
  photosService: Ember.inject.service('image-service.photos'),
  model() {
		var tabs = this.get('menuService').getTabs(this);
		var photos = this.get('photosService').fetchAll(); /* the list of photos */
    return { tabs: tabs, photos: photos };
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
