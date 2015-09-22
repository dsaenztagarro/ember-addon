import Ember from 'ember';

export default Ember.Controller.extend({
  searchService: Ember.inject.service('crops'),
  actions: {
    search() {
      this.get('searchService').search();
    }
  }
});
