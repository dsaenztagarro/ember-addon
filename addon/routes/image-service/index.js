import BaseRoute from 'ember-image-service/routes/base';

export default BaseRoute.extend({
  beforeModel() {
    this.client().transitionTo('photos');
  }
});
