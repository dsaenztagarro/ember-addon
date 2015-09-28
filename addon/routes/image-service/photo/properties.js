import Ember from 'ember';

export default Ember.Route.extend({
  photosService: Ember.inject.service('image-service.photos'),

  model: function() {
    return {
      photo: this.get('localCacheService').get('photo') /* current photo selected on list */
    };
  },
});
