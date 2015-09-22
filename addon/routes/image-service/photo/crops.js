import Ember from 'ember';

export default Ember.Route.extend({
  cropsService: Ember.inject.service('crops'),
  model: function() {
    var cropsService = this.get('cropsService');
    return {
      croptypes: cropsService.getCroptypes()
    };
  }
});
