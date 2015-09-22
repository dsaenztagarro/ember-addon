import Ember from 'ember';
// import TabBarMixin from 'webapp/mixins/tab-bar';

export default Ember.Controller.extend({
  photos: function() {
    return this.get('model').photos;
  }.property('model'),

  actions: {
    selectImage(photo) {
      this.get('cacheService').add('photo', photo);
      this.transitionToRoute('photo.properties', photo.id);
    }
  }
});
