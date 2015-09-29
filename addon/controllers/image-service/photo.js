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
    debugger
    // return ctrl.transitionToRoute.apply(ctrl, [args[0]]);
    return this.get('controller').transitionToRoute(args[0]);
  }
});


// TODO: Scopeable
export default Ember.Controller.extend({
  photos: Ember.computed.reads('model.photos'),
  photo: Ember.computed.reads('model.photo'),
  init() {
    var routingWrapper = RoutingWrapper.create({
      namespace: 'image-service',
      controller: this
    });
    this.set('routingWrapper', routingWrapper);
  },
  /**
   *
   *
   * @method methodName
   * @param {String} foo Argument 1
   * @param {Object} config A config object
   * @param {String} config.name The name on the config object
   * @param {Function} config.callback A callback function on the config object
   * @param {Boolean} [extra=false] Do extra, optional work
   * @return {Boolean} Returns true on success
   */
  client() {
    return this.get('routingWrapper');
  },

  actions: {
    selectPhoto(photo) {
      this.get('localCacheService').add('photo', photo);
      // this.client().transitionToRoute('photo.properties', { photo_id: photo.id });
      debugger
      // this.transitionToRoute('image-service.photo.properties', { photo_id: photo.id });
      this.transitionToRoute('image-service.photo.properties', { photo_id: photo.id });
    }
  }
});
