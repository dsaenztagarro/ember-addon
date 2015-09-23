import Ember from 'ember';

export default Ember.Service.extend({
  getTabs(routeName) {
    var config = {
      'default': [{
          routeName: 'photos',
          text: 'photos'
        }, {
          routeName: 'search',
          text: 'search'
        }, {
          routeName: 'upload',
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
