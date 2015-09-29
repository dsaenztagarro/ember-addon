import Ember from 'ember';
import ControllerRoutingWrapper from 'ember-core/wrappers/routing/controller';

/**
 * BaseController is the base class for all controllers
 *
 * @private
 * @class BaseController
 */
export default Ember.Controller.extend({
  init() {
    var routingWrapper = ControllerRoutingWrapper.create({
      namespace: 'image-service', controller: this
    });
    this.set('routingWrapper', routingWrapper);
  },

  /**
   * Returns an object for internal actions inside the client app
   *
   * @method client
   * @return {RoutingWrapper}
   */
  client() {
    return this.get('routingWrapper');
  }
});
