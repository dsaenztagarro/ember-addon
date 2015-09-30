import BaseRoute from 'ember-image-service/routes/base';
import TabbableMixin from 'ember-components/mixins/tab-bar';

export default BaseRoute.extend(TabbableMixin, {
  model() {
		var tabs = this.get('menuService').getTabs(this);
    var context = { tabs: tabs };
    return context;
  },

  afterModel() {
		this.client().transitionTo('photos');
  }
});
