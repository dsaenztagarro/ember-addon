import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectPhoto(photo) {
      this.sendAction('selectPhoto', photo);
    }
  }
});
