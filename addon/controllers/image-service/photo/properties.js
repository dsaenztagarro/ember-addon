import Ember from 'ember';
// import PhotoTabMixin from 'ember-image-service/mixins/tabs/photo';

export default Ember.ObjectController.extend({
  photoController: Ember.inject.controller('photo'),
  photo: Ember.computed.reads('photoController.photo'),
  init() {
    this.initScope();
    if (typeof this.post_init === 'function') {
      this.post_init();
    }
  },
  initScope() {
    var scope = Scope.create({ namespace: 'image-service', controller: this });
    this.set('localScope', scope);
  },
  scope() {
    return this.get('localScope');
  },
  /*
  actions: {
    selectImage(photo) {
      this.get('cacheService').add('photo', photo);
      // this.transitionToRoute('image-service.photo.properties', { photo_id: photo.id });
      this.scope().transitionToRoute('photo.properties', { photo_id: photo.id });
    }
  }
  */
});
