import Ember from 'ember';

export default Ember.Controller.extend({
  searchService: Ember.inject.service('image-service.crops'),
  actions: {
    search() {
      this.get('searchService').search();
    }
  }
});
