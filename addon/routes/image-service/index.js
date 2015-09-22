import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    debugger
    console.log('image-service#route');
    this.transitionTo('image-service.photos');
  }
});
