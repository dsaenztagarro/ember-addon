import Ember from 'ember';
// import RoutingWrapper from 'ember-core/wrappers/routing/controller-wrapper';

var RoutingWrapper = Ember.Object.extend({
  init() {
    if (this.get('controller') === undefined) {
      throw 'MandatoryAttributeError: controller';
    }
    if (this.get('namespace') === undefined) {
      throw 'MandatoryAttributeError: namespace';
    }
  },

  /**
   * Transition the application into another route in the scope of the client
   * application.
   *
   * @method transitionToRoute
   * @public
   */
  transitionToRoute() {
    var ctrl = this.get('controller');
    var args = Array.prototype.slice.call(arguments);
    var routeName = this.get('namespace') + '.' + args.shift();
    args.splice(0, 0, routeName);
    return ctrl.transitionToRoute.apply(ctrl, args);
  }
});

export default Ember.Controller.extend({
  init() {
    var routingWrapper = RoutingWrapper.create({
      namespace: 'image-service',
      controller: this
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
