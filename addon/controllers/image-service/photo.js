import Ember from 'ember';

var Scope = Ember.Object.extend({
  init() {
    if (this.get('controller') === undefined) {
      throw 'MandatoryAttributeError: controller';
    }
    if (this.get('namespace') === undefined) {
      throw 'MandatoryAttributeError: namespace';
    }
  },
  transitionToRoute(relativeRouteName) {
    var absoluteRouteName = this.get('namespace') + '.' + relativeRouteName;
    debugger
    return this.get('controller').transitionToRoute(absoluteRouteName);
  }
});

// TODO: Scopeable
export default Ember.Controller.extend({
  photos: Ember.computed.reads('model.photos'),
  photo: Ember.computed.reads('model.photo'),
  init() {
    this.initScope();
    if (typeof this.post_init === 'function') {
      this.post_init();
    }
  },
  initScope() {
    var scope = Scope.create({ namespace: 'image-service', controller: this });
    this.set('localScope', scope);
  },
  scope() {
    return this.get('localScope');
  },
  actions: {
    selectPhoto(photo) {
      this.get('localCacheService').add('photo', photo);
      this.scope().transitionToRoute('photo.properties', { photo_id: photo.id });
    }
  }
});
