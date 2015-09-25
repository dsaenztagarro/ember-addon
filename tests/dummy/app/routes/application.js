import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    selectTab(tab) {
      this.transitionTo(tab.routeName);
    },
  }
});
