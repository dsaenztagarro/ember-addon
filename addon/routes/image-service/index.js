import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    console.log('application#route');
    this.transitionTo('image-service.photos');
  }
});
