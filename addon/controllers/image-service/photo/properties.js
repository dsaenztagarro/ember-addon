import Ember from 'ember';
// import PhotoTabMixin from 'ember-image-service/mixins/tabs/photo';

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
