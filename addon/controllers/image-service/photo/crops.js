import Ember from 'ember';

export default Ember.ObjectController.extend({
  cropsService: Ember.inject.service('image-service.crops'),
  photosController: Ember.inject.controller('image-service.photos'),
  photo: Ember.computed.reads('photoController.photo'),
  croptypes: Ember.computed.reads('photoController.croptypes'),
  actions: {
    addCrops() {
      var cropsService = this.get('cropsService');
      cropsService.addCrops();
    }
  }
});
