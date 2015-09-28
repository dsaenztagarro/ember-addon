import BaseRoute from 'ember-image-service/routes/base';

export default BaseRoute.extend({
  actions: {
    selectTab(tab) {
      this.transitionTo(tab.routeName);
    },
  }
});
