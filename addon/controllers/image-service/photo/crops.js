import Ember from 'ember';

export default Ember.Controller.extend({
  cropsService: Ember.inject.service('image-service.crops'),
  photosController: Ember.inject.controller('image-service.photos'),
  photo: Ember.computed.reads('photosController.photo'),
  croptypes: Ember.computed.reads('model.croptypes'),
  actions: {
    addCrops() {
      var cropsService = this.get('cropsService');
      cropsService.addCrops();
    }
  }
});
