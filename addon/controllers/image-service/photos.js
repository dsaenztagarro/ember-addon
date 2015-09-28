import Ember from 'ember';
// import TabbableMixin from 'webapp/mixins/tab-bar';

export default Ember.Controller.extend({
  /*
  photos: function() {
    return this.get('model').photos;
  }.property('model'),
  */

  actions: {
    selectImage(photo) {
      this.get('cacheService').add('photo', photo);
      this.transitionToRoute('image-service.photo.properties', photo.id);
    }
  }
});
