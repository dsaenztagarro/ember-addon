import Ember from 'ember';
import TabBarMixin from 'webapp/mixins/tab-bar';

export default Ember.Route.extend(TabBarMixin, {
  photosService: Ember.inject.service('photos'),

  model: function() {
    return {
      tabs: this.get('menuService').getTabs('default'),
      photos: this.get('photosService').fetchAll(), /* the list of photos */
      photo: this.get('cacheService').get('photo') /* current photo selected on list */
    };
  },

  afterModel: function(model) {
    var photo = model.photo;
    if (photo) {
      this.transitionTo('photo.properties', model.photo.id);
    } else {
      this.transitionTo('photos');
    }
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('photos', model.photos);
    controller.set('photo', model.photo);
  }
});
