import Ember from 'ember';

export default Ember.Service.extend({
  getTabs(routeName) {
    var config = {
      'default': [{
          routeName: 'image-service.photos',
          text: 'photos'
        }, {
          routeName: 'image-service.search',
          text: 'search'
        }, {
          routeName: 'image-service.upload',
          text: 'upload'
        }
      ]
    };
    return config['default'];
  },

  getSubtabs(routeName) {
    return {};
  }
});
