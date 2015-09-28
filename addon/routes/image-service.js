import Ember from 'ember';
import TabbableMixin from 'ember-components/mixins/tab-bar';

export default Ember.Route.extend(TabbableMixin, {
  model() {
		var tabs = this.get('localMenuService').getTabs(this);
    var context = { tabs: tabs };
    return context;
  },

  afterModel() {
		this.transitionTo('image-service.photos');
  },

});
