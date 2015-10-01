import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select(photo) {
      this.sendAction('select', photo);
    }
  }
});
