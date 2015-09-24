import Ember from 'ember';

export default Ember.ObjectController.extend({
  photoController: Ember.inject.controller('photo'),
  photo: Ember.computed.reads('photoController.photo'),
  actions: {
    selectImage(photo) {
      this.get('cacheService').add('photo', photo);
      this.transitionToRoute('image-service.photo.properties', { photo_id: photo.id });
    }
  }
});
