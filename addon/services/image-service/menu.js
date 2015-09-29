import Ember from 'ember';

var config = {
  'content.image-service': [
    {
      name: 'photos',
      routeName: 'content.image-service.photos'
    }, {
      name: 'search',
      routeName: 'content.image-service.search'
    }, {
      name: 'upload',
      routeName: 'content.image-service.upload'
    }
  ],
  'content.image-service.photo': [
    {
      name: 'properties',
      routeName: 'content.image-service.photo.properties'
    }, {
      name: 'crops',
      routeName: 'content.image-service.photo.crops'
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
