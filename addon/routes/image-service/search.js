import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      tabs: this.get('menuService').getTabs('default'),
    };
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('tabs', model.tabs);
  }
});
