import Ember from 'ember';
import TabBarMixin from 'webapp/mixins/tab-bar';

export default Ember.Route.extend(TabBarMixin, {
  photosService: Ember.inject.service('photos'),
  photosService2: Ember.inject.service('image-service.photos'),
  model() {
		var tabs = this.get('menuService').getTabs('default');
		var photos = this.get('photosService').fetchAll(); /* the list of photos */
		var photo = null; /* current photo selected on list */
    return { tabs: tabs, photos: photos, photo: photo };
  },

  afterModel(model) {
    var photos = model.photos;
    // Select first photo by default
    if (photos.length > 0) {
      var photo = photos[0];
      this.get('cacheService').add('photo', photo);
      this.transitionTo('photo', photo.id);
    }
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('photos', model.photos);
    controller.set('photo', model.photo);
  }
});
