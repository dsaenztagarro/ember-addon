import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    debugger
  },
  actions: {
    selectTab(tab) {
      this.transitionTo(tab.routeName);
    },
  }
});
