import Ember from 'ember';
import TabBarMixin from 'ember-components/mixins/tab-bar';

export default Ember.Route.extend(TabBarMixin, {
  model() {
		var tabs = this.get('menuService').getTabs('default');
    var context = { tabs: tabs };
    return context;
  },

  afterModel() {
		this.transitionTo('image-service.photos');
  },

});
