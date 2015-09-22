import Ember from 'ember';
import TabBarMixin from 'webapp/mixins/tab-bar';

//TODO: Should be an ArrayController
export default Ember.Controller.extend(TabBarMixin, {
  photos: Ember.computed.reads('model.photos'),
  photo: Ember.computed.reads('model.photo'),
  actions: {
    selectImage(photo) {
      this.get('cacheService').add('photo', photo);
      this.transitionToRoute('photo.properties', photo.id);
    }
  }
});
