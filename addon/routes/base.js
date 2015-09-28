import Ember from 'ember';
import RouteableMixin from 'ember-core/mixins/routeable';

export default Ember.Route.extend(RouteableMixin, {
  clientNamespace() {
    return 'image-service';
  },
});
