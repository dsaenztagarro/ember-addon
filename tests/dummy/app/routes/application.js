import BaseRoute from './routes/base';

export default BaseRoute.extend({
  actions: {
    selectTab(tab) {
      this.transitionTo(tab.routeName);
    },
  }
});
