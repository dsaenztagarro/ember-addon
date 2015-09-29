import Ember from 'ember';

var config = {
  'container.image-service': [
    {
      name: 'photos',
      routeName: 'container.image-service.photos'
    }, {
      name: 'search',
      routeName: 'container.image-service.search'
    }, {
      name: 'upload',
      routeName: 'container.image-service.upload'
    }
  ],
  'container.image-service.photo': [
    {
      name: 'properties',
      routeName: 'container.image-service.photo.properties'
    }, {
      name: 'crops',
      routeName: 'container.image-service.photo.crops'
    }
  ]
};

export default Ember.Service.extend({
  init() {
    this.set('config', config);
  },

  getTabs(route) {
    return this.get('config')[route.routeName];
  }
});
