import Ember from 'ember';

export default Ember.Route.extend({
  cropsService: Ember.inject.service('image-service.crops'),
  model: function() {
    var cropsService = this.get('cropsService');
    return {
      croptypes: cropsService.getCroptypes()
    };
  }
});
