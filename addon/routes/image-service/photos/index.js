import Ember from 'ember';
import TabBarMixin from 'ember-components/mixins/tab-bar';

export default Ember.Route.extend(TabBarMixin, {
  photosService: Ember.inject.service('image-service.photos'),
  model() {
		var tabs = this.get('menuService').getTabs('default');
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
      this.transitionTo('image-service.photo', photo.id);
    }
	}
});
