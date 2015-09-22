import Ember from 'ember';

//TODO: Should be an ObjectController
export default Ember.Controller.extend({
  photoController: Ember.inject.controller('photo'),
  photo: Ember.computed.reads('photoController.photo'),
  actions: {
    selectImage(photo) {
      this.get('cacheService').add('photo', photo);
      this.transitionToRoute('photo.properties', { photo_id: photo.id });
    }
  }
});
