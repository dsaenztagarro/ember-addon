import Ember from 'ember';
import ApplicationController from 'ember-image-service/controllers/application';

export default ApplicationController.extend({
  photos: Ember.computed.reads('model.photos'),
  photo: Ember.computed.reads('model.photo'),

  actions: {
    selectPhoto(photo) {
      this.get('localCacheService').add('photo', photo);
      this.client().transitionToRoute('photo.properties', photo.id);
    }
  }
});
