import Ember from 'ember';

var config = {
  'image-service': [
    {
      name: 'photos',
      routeName: 'image-service.photos'
    }, {
      name: 'search',
      routeName: 'image-service.search'
    }, {
      name: 'upload',
      routeName: 'image-service.upload'
    }
  ],
  'image-service.photo': [
    {
      name: 'properties',
      routeName: 'image-service.photo.properties'
    }, {
      name: 'crops',
      routeName: 'image-service.photo.crops'
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
