import Ember from 'ember';
import BaseRoute from 'ember-image-service/routes/base';

export default BaseRoute.extend({
  photosService: Ember.inject.service('image-service.photos'),

  model: function() {
    var tabs = this.get('localMenuService').getTabs(this);
    var photos = this.get('photosService').fetchAll();
    var photo = this.get('localCacheService').get('photo');
    return {
      tabs: tabs,
      photos: photos, /* the list of photos */
      photo: photo /* current photo selected on list */
    };
  },

  afterModel: function(model) {
    var photo = model.photo;
    if (photo) {
      this.transitionTo('image-service.photo.properties', model.photo.id);
    } else {
      this.transitionTo('image-service.photos');
    }
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('photos', model.photos);
    controller.set('photo', model.photo);
  }
});
